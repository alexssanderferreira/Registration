import { Address } from "./Address";

export interface Company{
  id:string;
  companyName:string;
  cnpj:string;
  address:{
    id:string;
    streetName:string;
    number:number;
    district:number;
    zipCode:string;
  }
}
