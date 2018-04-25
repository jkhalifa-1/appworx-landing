import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App2goComponent } from './app2go.component';

describe('App2goComponent', () => {
  let component: App2goComponent;
  let fixture: ComponentFixture<App2goComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App2goComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App2goComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
