import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDoadorComponent } from './chat-doador.component';

describe('CadastroClientesComponent', () => {
  let component: ChatDoadorComponent;
  let fixture: ComponentFixture<ChatDoadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDoadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDoadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
