import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VAsidePanel } from './v-aside-panel';

describe('VAsidePanel', () => {
  let component: VAsidePanel;
  let fixture: ComponentFixture<VAsidePanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VAsidePanel],
    }).compileComponents();

    fixture = TestBed.createComponent(VAsidePanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close on mouse leave in hover mode', () => {
    fixture.componentRef.setInput('hoverToOpen', true);
    component.isOpen.set(true);

    component.handleMouseLeave();

    expect(component.isOpen()).toBe(false);
  });

  it('should close on outside click in click mode without changing the mode', () => {
    fixture.componentRef.setInput('clickToPin', true);
    component.isPinned.set(true);
    component.isOpen.set(true);

    component.handleDocumentClick(new MouseEvent('click', { bubbles: true }));

    expect(component.isOpen()).toBe(false);
    expect(component.isPinned()).toBe(true);
  });

  it('should preserve the selected mode when opening and closing', () => {
    fixture.componentRef.setInput('clickToPin', true);
    component.isPinned.set(true);

    component.isOpen.set(false);
    component.handlePanelClick();
    component.isOpen.set(false);

    expect(component.isPinned()).toBe(true);
  });
});
