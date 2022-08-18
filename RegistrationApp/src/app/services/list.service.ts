import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/Company';
import { Person } from '../models/Person';
import { Address } from '../models/Address';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  baseURL = 'https://localhost:3001/'
  constructor(private http:HttpClient) { }


  getPeople(): Observable<Person[]>{
    return this.http.get<Person[]>(`${this.baseURL}person`)
  }

  getPersonById(id:string): Observable<Person>{
    return this.http.get<Person>(`${this.baseURL}person/${id}`)
  }

  postPerson(newPerson: Person) {
    return this.http.post(`${this.baseURL}person`, newPerson)
  }

  putPerson(id : string, updatePerson:Person){
    return this.http.put(`${this.baseURL}person/${id}`, updatePerson)
  }

  deletePerson(id: string) {
    return this.http.delete(`${this.baseURL}person/${id}`)
  }




  getCompanies(): Observable<Company[]>{
    return this.http.get<Company[]>(`${this.baseURL}company`)
  }

  getCompanyById(id:string): Observable<Company>{
      return this.http.get<Company>(`${this.baseURL}company/${id}`)
  }

  postCompany(newCompany: Company) {
    return this.http.post(`${this.baseURL}company`, newCompany)
  }

  putCompany(id : string, updateCompany:Company){
    return this.http.put(`${this.baseURL}company/${id}`, updateCompany)
  }

  deleteCompany(id: string) {
    return this.http.delete(`${this.baseURL}company/${id}`)
  }




  getAdresses(): Observable<Address[]>{
    return this.http.get<Address[]>(`${this.baseURL}address`)
  }

  getAddressById(id:string): Observable<Address>{
    return this.http.get<Address>(`${this.baseURL}address/${id}`)
  }

  postAddress(newAddress: Address) {
    return this.http.post(`${this.baseURL}address`, newAddress)
  }

  putAddress(id : string, updateAddress:Address){
    return this.http.put(`${this.baseURL}address/${id}`, updateAddress)
  }

  deleteAddress(id: string) {
    return this.http.delete(`${this.baseURL}address/${id}`)
  }
}
