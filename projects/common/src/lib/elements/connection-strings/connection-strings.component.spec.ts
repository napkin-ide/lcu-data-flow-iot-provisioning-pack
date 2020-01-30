import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionStringsComponent } from './connection-strings.component';

describe('ConnectionStringsComponent', () => {
  let component: ConnectionStringsComponent;
  let fixture: ComponentFixture<ConnectionStringsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionStringsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionStringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
