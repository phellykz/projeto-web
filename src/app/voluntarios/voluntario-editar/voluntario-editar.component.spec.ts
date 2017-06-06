import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntarioEditarComponent } from './voluntario-editar.component';

describe('VoluntarioEditarComponent', () => {
  let component: VoluntarioEditarComponent;
  let fixture: ComponentFixture<VoluntarioEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoluntarioEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoluntarioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
