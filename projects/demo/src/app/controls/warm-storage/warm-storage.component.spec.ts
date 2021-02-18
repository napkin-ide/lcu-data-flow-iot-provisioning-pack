import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WarmStorageComponent } from './warm-storage.component';

describe('WarmStorageComponent', () => {
  let component: WarmStorageComponent;
  let fixture: ComponentFixture<WarmStorageComponent>;

  beforeEach(waitForAsync(() => {
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
