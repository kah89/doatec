import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNotCadastroComponent } from './modal-not-cadastro.component';

describe('ModalNotCadastroComponent', () => {
  let component: ModalNotCadastroComponent;
  let fixture: ComponentFixture<ModalNotCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNotCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNotCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
