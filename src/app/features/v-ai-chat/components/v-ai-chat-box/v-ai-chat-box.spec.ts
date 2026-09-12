import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VAiChatBox } from './v-ai-chat-box';

describe('VAiChatBox', () => {
  let component: VAiChatBox;
  let fixture: ComponentFixture<VAiChatBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VAiChatBox],
    }).compileComponents();

    fixture = TestBed.createComponent(VAiChatBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
