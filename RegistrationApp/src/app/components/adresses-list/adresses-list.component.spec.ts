import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressesListComponent } from './adresses-list.component';

describe('AdressesListComponent', () => {
  let component: AdressesListComponent;
  let fixture: ComponentFixture<AdressesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdressesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdressesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
