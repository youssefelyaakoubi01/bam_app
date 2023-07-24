import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilieuComponent } from './milieu.component';

describe('MilieuComponent', () => {
  let component: MilieuComponent;
  let fixture: ComponentFixture<MilieuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MilieuComponent]
    });
    fixture = TestBed.createComponent(MilieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
