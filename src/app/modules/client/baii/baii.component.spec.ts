import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiiComponent } from './baii.component';

describe('BaiiComponent', () => {
  let component: BaiiComponent;
  let fixture: ComponentFixture<BaiiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaiiComponent]
    });
    fixture = TestBed.createComponent(BaiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
