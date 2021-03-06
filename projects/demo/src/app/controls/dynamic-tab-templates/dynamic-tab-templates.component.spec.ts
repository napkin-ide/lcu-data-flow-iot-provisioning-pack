import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DynamicTabTemplatesComponent } from './dynamic-tab-templates.component';

describe('DynamicTabTemplatesComponent', () => {
  let component: DynamicTabTemplatesComponent;
  let fixture: ComponentFixture<DynamicTabTemplatesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTabTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTabTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
