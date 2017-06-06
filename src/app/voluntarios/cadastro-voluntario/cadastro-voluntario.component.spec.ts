import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroVoluntarioComponent } from './cadastro-voluntario.component';

describe('CadastroVoluntarioComponent', () => {
  let component: CadastroVoluntarioComponent;
  let fixture: ComponentFixture<CadastroVoluntarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroVoluntarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
