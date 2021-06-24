import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleDoacaoComponent } from './controle-doacao.component';

describe('ControleDoacaoComponent', () => {
  let component: ControleDoacaoComponent;
  let fixture: ComponentFixture<ControleDoacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleDoacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleDoacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
