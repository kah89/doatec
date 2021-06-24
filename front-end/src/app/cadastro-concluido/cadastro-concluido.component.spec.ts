import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroConcluidoComponent } from './cadastro-concluido.component';

describe('CadastroConcluidoComponent', () => {
  let component: CadastroConcluidoComponent;
  let fixture: ComponentFixture<CadastroConcluidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroConcluidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroConcluidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
