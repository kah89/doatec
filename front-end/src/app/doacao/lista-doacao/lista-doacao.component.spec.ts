import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDoacaoComponent } from './lista-doacao.component';

describe('ListaDoacaoComponent', () => {
  let component: ListaDoacaoComponent;
  let fixture: ComponentFixture<ListaDoacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDoacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDoacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
