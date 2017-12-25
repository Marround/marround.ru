import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitecatalogComponent } from './sitecatalog.component';

describe('SitecatalogComponent', () => {
  let component: SitecatalogComponent;
  let fixture: ComponentFixture<SitecatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitecatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitecatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
