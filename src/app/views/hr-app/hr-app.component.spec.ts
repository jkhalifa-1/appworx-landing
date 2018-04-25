import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrAppComponent } from './hr-app.component';

describe('HrAppComponent', () => {
  let component: HrAppComponent;
  let fixture: ComponentFixture<HrAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
