import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiMomentComponent } from './edi-moment.component';

describe('EdiMomentComponent', () => {
  let component: EdiMomentComponent;
  let fixture: ComponentFixture<EdiMomentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdiMomentComponent]
    });
    fixture = TestBed.createComponent(EdiMomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
