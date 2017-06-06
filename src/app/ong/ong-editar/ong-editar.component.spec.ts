import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngEditarComponent } from './ong-editar.component';

describe('OngEditarComponent', () => {
  let component: OngEditarComponent;
  let fixture: ComponentFixture<OngEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
