import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { PeopleListComponent } from './components/people/people-list/people-list.component';
import { PeopleComponent } from './components/people/people.component';
import { CreatePersonComponent } from './components/people/createperson/createperson.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CreateCompanyComponent } from './components/companies/createcompany/createcompany.component';
import { CompaniesListComponent } from './components/companies/companies-list/companies-list.component';
import { MessageComponent } from './shared/message/message.component';
import { AdressesListComponent } from './components/adresses-list/adresses-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PeopleListComponent,
    PeopleComponent,
    CreatePersonComponent,
    CompaniesComponent,
    CreateCompanyComponent,
    CompaniesListComponent,
    MessageComponent,
    CreateCompanyComponent,
    AdressesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
