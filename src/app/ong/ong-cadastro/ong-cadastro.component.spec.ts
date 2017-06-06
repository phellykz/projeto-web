import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngCadastroComponent } from './ong-cadastro.component';

describe('OngCadastroComponent', () => {
  let component: OngCadastroComponent;
  let fixture: ComponentFixture<OngCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
