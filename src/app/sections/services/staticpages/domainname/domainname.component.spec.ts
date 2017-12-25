import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainnameComponent } from './domainname.component';

describe('DomainnameComponent', () => {
  let component: DomainnameComponent;
  let fixture: ComponentFixture<DomainnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
