import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormulairePanier } from './formulaire-panier';

describe('FormulairePanier', () => {
  let component: FormulairePanier;
  let fixture: ComponentFixture<FormulairePanier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulairePanier],
    }).compileComponents();

    fixture = TestBed.createComponent(FormulairePanier);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
