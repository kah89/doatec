import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatOngComponent } from './chat-ong.component';

describe('ChatOngComponent', () => {
  let component: ChatOngComponent;
  let fixture: ComponentFixture<ChatOngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatOngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatOngComponent);
    component = fixture.ChatOngComponent;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
