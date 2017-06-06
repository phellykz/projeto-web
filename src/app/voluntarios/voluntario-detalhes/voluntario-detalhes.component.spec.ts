import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntarioDetalhesComponent } from './voluntario-detalhes.component';

describe('VoluntarioDetalhesComponent', () => {
  let component: VoluntarioDetalhesComponent;
  let fixture: ComponentFixture<VoluntarioDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoluntarioDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoluntarioDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
