import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VFilter } from './v-filter';

describe('VFilter', () => {
  let component: VFilter;
  let fixture: ComponentFixture<VFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VFilter],
    }).compileComponents();

    fixture = TestBed.createComponent(VFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
