import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarmStorageComponent } from './warm-storage.component';

describe('WarmStorageComponent', () => {
  let component: WarmStorageComponent;
  let fixture: ComponentFixture<WarmStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarmStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarmStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
