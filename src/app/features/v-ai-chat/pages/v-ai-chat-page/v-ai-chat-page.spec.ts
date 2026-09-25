import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VAiChatPage } from './v-ai-chat-page';

describe('VAiChatPage', () => {
  let component: VAiChatPage;
  let fixture: ComponentFixture<VAiChatPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VAiChatPage],
    }).compileComponents();

    fixture = TestBed.createComponent(VAiChatPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
