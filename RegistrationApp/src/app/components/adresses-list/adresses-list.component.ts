import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Address } from 'src/app/models/Address';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-adresses-list',
  templateUrl: './adresses-list.component.html',
  styleUrls: ['./adresses-list.component.scss']
})
export class AdressesListComponent implements OnInit {
  modalRef?: BsModalRef;
  adresses : Address[] = []
  filteredAdresses : Address[] = []
  private _filterList: string = '';
  addressId : string = ""

  public get filterList(): string {
    return this._filterList;
  }

  public set filterList(value: string) {
    this._filterList = value;
    this.filteredAdresses = this.filterList ? this.filterAdresses(this.filterList) : this.adresses;
  }

  constructor(private listServices:ListService,private modalService: BsModalService,private router: Router) { }

  ngOnInit(): void {
    this.getAdresses()
  }

  filterAdresses(filterBy: string): Address[] {
    filterBy = filterBy.toLowerCase();
    return this.adresses.filter(
      (      address: {  streetName: string; } ) => address.streetName.toLowerCase().indexOf(filterBy) !== -1 ||
      address.streetName.toLowerCase().indexOf(filterBy) !== -1
    )
  }

  getAdresses(): void {
    this.listServices.getAdresses().subscribe(
      (response:Address[])=> {
        this.adresses = response
        this.filteredAdresses = this.adresses
      },
      error => console.log(error)
    )
  }

  openModal(template: TemplateRef<any>, addressId: string) {
    this.addressId = addressId;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.modalRef?.hide();

    this.listServices.deleteAddress(this.addressId).subscribe(
    () => {
      this.getAdresses()
    },
    ((error: any) => {
      console.error(error);
    })
    )
  }

  decline(): void {
    this.modalRef?.hide();
  }

  addressEdit(id:string): void {
    this.router.navigate([`enderecos/modificar/${id}`])
  }
}
