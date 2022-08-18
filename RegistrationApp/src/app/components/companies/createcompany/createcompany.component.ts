import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/models/Company';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-createcompany',
  templateUrl: './createcompany.component.html',
  styleUrls: ['./createcompany.component.scss']
})
export class CreateCompanyComponent implements OnInit {

  company = {} as Company;
  form!: FormGroup;
  stateSave = 'post';
  addressId: string = ''

  constructor(private formBuilder: FormBuilder, private listServices:ListService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadCompany()
    this.validation();
  }

  validation(): void {
    this.form = this.formBuilder.group({
      companyName: ['', [Validators.required,Validators.minLength(4)]],
      cnpj: ['', [Validators.required,Validators.minLength(8)]],
      address: this.formBuilder.group({
        streetName: ['', [Validators.required,Validators.minLength(4)]],
        number: ['', [Validators.required]],
        district: ['', [Validators.required,Validators.minLength(4)]],
        zipCode: ['', [Validators.required]],
      }),
    })
  }


  loadCompany(): void {
    const companyIdParam = this.route.snapshot.paramMap.get('id');

    if(companyIdParam !== null){
      this.stateSave = 'put';

      this.listServices.getCompanyById(companyIdParam).subscribe(
        (response: Company) => {
          this.company = { ... response}
          this.form.patchValue(this.company);
        },
        error => console.log(error)
        )}
      }

      submitForm(): void {
        if(this.form.valid){
      if(this.stateSave == 'post'){
        const NewCompany= this.form.getRawValue() as Company
        this.listServices.postCompany(NewCompany).subscribe(() => {
          this.router.navigate(['empresas/lista'])
        }, (error) => { console.log(error) })
      }else{
        const companyIdParam = this.route.snapshot.paramMap.get('id')
        const NewCompany= this.form.getRawValue() as Company
        this.listServices.putCompany(companyIdParam as string ,NewCompany).subscribe(() => {
          this.router.navigate(['empresas/lista'])
        }, (error) => { console.log(error) })
      }}
      const NewCompany= this.form.getRawValue() as Company
      console.log(NewCompany)}

}
