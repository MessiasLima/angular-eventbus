import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEventbusComponent } from './ngx-eventbus.component';

describe('NgxEventbusComponent', () => {
  let component: NgxEventbusComponent;
  let fixture: ComponentFixture<NgxEventbusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxEventbusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxEventbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
