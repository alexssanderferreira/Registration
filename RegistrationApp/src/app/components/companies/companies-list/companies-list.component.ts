import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Company } from 'src/app/models/Company';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit {
  modalRef?: BsModalRef;
  companies : Company[] = []
  filteredCompanies : Company[] = []
  private _filterList: string = '';
  companyId : string = ""

  public get filterList(): string {
    return this._filterList;
  }

  public set filterList(value: string) {
    this._filterList = value;
    this.filteredCompanies = this.filterList ? this.filterCompanies(this.filterList) : this.companies;
  }

  constructor(private listServices:ListService,private modalService: BsModalService,private router: Router) { }

  ngOnInit(): void {
    this.getCompanies()
  }

  filterCompanies(filterBy: string): Company[] {
    filterBy = filterBy.toLowerCase();
    return this.companies.filter(
      (      company: {  companyName: string; } ) => company.companyName.toLowerCase().indexOf(filterBy) !== -1 ||
      company.companyName.toLowerCase().indexOf(filterBy) !== -1
    )
  }

  getCompanies(): void {
    this.listServices.getCompanies().subscribe(
      (response:Company[])=> {
        this.companies = response
        this.filteredCompanies = this.companies
      },
      error => console.log(error)
    )
  }

  openModal(template: TemplateRef<any>, companyId: string) {
    this.companyId = companyId;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.modalRef?.hide();

    this.listServices.deleteCompany(this.companyId).subscribe(
    () => {
      console.log(this.companyId)
      this.getCompanies()
    },
    ((error: any) => {
      console.error(error);
    })
    )
  }

  decline(): void {
    this.modalRef?.hide();
  }

  companyEdit(id:string): void {
    this.router.navigate([`empresas/modificar/${id}`])
  }
}
