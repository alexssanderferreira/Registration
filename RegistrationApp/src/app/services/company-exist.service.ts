import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs';
import { ListService } from './list.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyExistService {

  constructor(private listService: ListService) { }

  companyExist() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((companyId) => this.listService.getCompanyById(companyId)),
        map((companyExist) => companyExist ? { companyExist: true } : null),
        first()
      )
    }
  }
}
