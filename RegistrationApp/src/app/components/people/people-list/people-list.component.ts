
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Person } from '../../../models/Person';
import { ListService } from '../../../services/list.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  modalRef?: BsModalRef;
  people : Person[] = []
  filteredPeople : Person[] = []
  private _filterList: string = '';
  personId : string = ""

  public get filterList(): string {
    return this._filterList;
  }

  public set filterList(value: string) {
    this._filterList = value;
    this.filteredPeople = this.filterList ? this.filterPeople(this.filterList) : this.people;
  }

  constructor(private listServices:ListService,private modalService: BsModalService,private router: Router) { }

  ngOnInit(): void {
    this.getPeople()
  }

  filterPeople(filterBy: string): Person[] {
    filterBy = filterBy.toLowerCase();
    return this.people.filter(
      (      person: { fullName: string; company: { companyName: string; }; }) => person.fullName.toLowerCase().indexOf(filterBy) !== -1 ||
      person.company.companyName.toLowerCase().indexOf(filterBy) !== -1
    )
  }

  getPeople(): void {
    this.listServices.getPeople().subscribe(
      (response:Person[])=> {
        this.people = response
        this.filteredPeople = this.people
      },
      error => console.log(error)
    )
  }

  openModal(template: TemplateRef<any>, personId: string) {
    this.personId = personId;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.modalRef?.hide();

    this.listServices.deletePerson(this.personId).subscribe(
    () => {
      console.log(this.personId)
      this.getPeople()
    },
    ((error: any) => {
      console.error(error);
    })
    )
  }

  decline(): void {
    this.modalRef?.hide();
  }

  personEdit(id:string): void {
    this.router.navigate([`pessoas/modificar/${id}`])
  }
}
