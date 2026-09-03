import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { VNavMenu } from './v-nav-menu';

describe('VNavMenu', () => {
  let component: VNavMenu;
  let fixture: ComponentFixture<VNavMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VNavMenu],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(VNavMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
