import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitecutawayComponent } from './sitecutaway.component';

describe('SitecutawayComponent', () => {
  let component: SitecutawayComponent;
  let fixture: ComponentFixture<SitecutawayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitecutawayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitecutawayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
