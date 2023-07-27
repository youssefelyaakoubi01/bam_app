import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifierArticleComponent } from './verifier-article.component';

describe('VerifierArticleComponent', () => {
  let component: VerifierArticleComponent;
  let fixture: ComponentFixture<VerifierArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifierArticleComponent]
    });
    fixture = TestBed.createComponent(VerifierArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
