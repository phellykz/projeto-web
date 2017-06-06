import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngNaoEncontradaComponent } from './ong-nao-encontrada.component';

describe('OngNaoEncontradaComponent', () => {
  let component: OngNaoEncontradaComponent;
  let fixture: ComponentFixture<OngNaoEncontradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngNaoEncontradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngNaoEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
