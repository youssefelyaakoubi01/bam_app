import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsAlimentairesComponent } from './produits-alimentaires.component';

describe('ProduitsAlimentairesComponent', () => {
  let component: ProduitsAlimentairesComponent;
  let fixture: ComponentFixture<ProduitsAlimentairesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProduitsAlimentairesComponent]
    });
    fixture = TestBed.createComponent(ProduitsAlimentairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
