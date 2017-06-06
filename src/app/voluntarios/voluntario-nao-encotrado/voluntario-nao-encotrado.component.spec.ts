import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntarioNaoEncotradoComponent } from './voluntario-nao-encotrado.component';

describe('VoluntarioNaoEncotradoComponent', () => {
  let component: VoluntarioNaoEncotradoComponent;
  let fixture: ComponentFixture<VoluntarioNaoEncotradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoluntarioNaoEncotradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoluntarioNaoEncotradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
