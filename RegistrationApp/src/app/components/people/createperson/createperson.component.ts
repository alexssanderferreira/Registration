import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/Person';
import { CompanyExistService } from 'src/app/services/company-exist.service';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-createperson',
  templateUrl: './createperson.component.html',
  styleUrls: ['./createperson.component.scss'],
})
export class CreatePersonComponent implements OnInit {
  person = {} as Person;
  form!: FormGroup;
  stateSave = 'post';

  constructor(
    private formBuilder: FormBuilder,
    private listServices: ListService,
    private router: Router,
    private route: ActivatedRoute,
    private companyExistService: CompanyExistService
  ) {}

  ngOnInit(): void {
    this.loadPerson();
    this.validation();
  }

  validation(): void {
    this.form = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      cpf: [
        '',
        [
          Validators.required,
          Validators.maxLength(15),
          Validators.minLength(11),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      companyId: ['', [Validators.required]],
      address: this.formBuilder.group({
        streetName: ['', [Validators.required, Validators.minLength(4)]],
        number: ['', [Validators.required]],
        district: ['', [Validators.required, Validators.minLength(4)]],
        zipCode: ['', [Validators.required]],
      }),
    });
  }

  loadPerson(): void {
    const personIdParam = this.route.snapshot.paramMap.get('id');

    if (personIdParam !== null) {
      this.stateSave = 'put';

      this.listServices.getPersonById(personIdParam).subscribe(
        (person: Person) => {
          this.person = { ...person };
          this.person.addressId = this.person.address.id;
          this.person.companyId = this.person.company.id;
          this.form.patchValue(this.person);
        },
        (error) => console.log(error)
      );
    }
  }

  submitForm(): void {
    if (this.form.valid) {
      if (this.stateSave == 'post') {
        const NewPerson = this.form.getRawValue() as Person;
        console.log(NewPerson);
        this.listServices.postPerson(NewPerson).subscribe(
          () => {
            console.log(NewPerson);
            this.router.navigate(['pessoas/lista']);
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        const personIdParam = this.route.snapshot.paramMap.get('id');
        const NewPerson = this.form.getRawValue() as Person;
        this.listServices
          .putPerson(personIdParam as string, NewPerson)
          .subscribe(
            () => {
              this.router.navigate(['pessoas/lista']);
            },
            (error) => {
              console.log(error);
            }
          );
      }
    }
  }
}
