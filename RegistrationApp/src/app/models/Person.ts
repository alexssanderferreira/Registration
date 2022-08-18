export interface Person{
  id: string;
  fullName:string;
  cpf:string;
  email:string;
  addressId:string;
  companyId:string;
  address:{
    id:string;
    streetName:string;
    number:number;
    district:string;
    zipCode:string;
  };
  company:{
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
}
