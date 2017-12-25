import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllinclusiveComponent } from './allinclusive.component';

describe('AllinclusiveComponent', () => {
  let component: AllinclusiveComponent;
  let fixture: ComponentFixture<AllinclusiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllinclusiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllinclusiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
