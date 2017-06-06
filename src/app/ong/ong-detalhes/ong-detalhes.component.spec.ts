import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngDetalhesComponent } from './ong-detalhes.component';

describe('OngDetalhesComponent', () => {
  let component: OngDetalhesComponent;
  let fixture: ComponentFixture<OngDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
