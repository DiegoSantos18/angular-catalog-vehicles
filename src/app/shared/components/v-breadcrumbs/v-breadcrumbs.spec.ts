import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { VBreadcrumbs } from './v-breadcrumbs';

describe('VBreadcrumbs', () => {
  let fixture: ComponentFixture<VBreadcrumbs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VBreadcrumbs],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(VBreadcrumbs);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
