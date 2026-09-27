import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VModal } from './v-modal';

describe('VModal', () => {
  let component: VModal;
  let fixture: ComponentFixture<VModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VModal],
    }).compileComponents();

    fixture = TestBed.createComponent(VModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
