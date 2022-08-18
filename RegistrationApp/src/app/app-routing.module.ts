import { HtmlParser } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdressesListComponent } from './components/adresses-list/adresses-list.component';
import { CompaniesListComponent } from './components/companies/companies-list/companies-list.component';
import { CreateCompanyComponent } from './components/companies/createcompany/createcompany.component';
import { HomeComponent } from './components/home/home.component';
import { CreatePersonComponent } from './components/people/createperson/createperson.component';
import { PeopleListComponent } from './components/people/people-list/people-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch: 'full'
  },{
    path:'pessoas',
    redirectTo:'/pessoas/lista',
    pathMatch: 'full'
  },{
    path:'empresas',
    redirectTo:'/empresas/lista',
    pathMatch: 'full'
  },{
    path:'enderecos',
    redirectTo:'/enderecos',
    pathMatch: 'full'
  },{
    path:'home',
    component: HomeComponent
  },{
    path:'pessoas',
    children: [
      {path: 'lista', component:PeopleListComponent},
      {path: 'criar', component:CreatePersonComponent},
      {path: 'modificar/:id', component:CreatePersonComponent}
    ]
  },{
    path:'empresas',
    children: [
      {path: 'lista', component:CompaniesListComponent},
      {path: 'criar', component:CreateCompanyComponent},
      {path: 'modificar/:id', component:CreateCompanyComponent}
    ]
  },{
    path:'enderecos',
    component:AdressesListComponent,
    pathMatch: 'full'
  },{
    path:'**',
    redirectTo:'/home',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
