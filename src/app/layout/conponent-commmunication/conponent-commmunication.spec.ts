import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConponentCommmunication } from './conponent-commmunication';

describe('ConponentCommmunication', () => {
  let component: ConponentCommmunication;
  let fixture: ComponentFixture<ConponentCommmunication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConponentCommmunication],
    }).compileComponents();

    fixture = TestBed.createComponent(ConponentCommmunication);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
