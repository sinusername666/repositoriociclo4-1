import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarServicioComponent } from './asignar-servicio.component';

describe('AsignarServicioComponent', () => {
  let component: AsignarServicioComponent;
  let fixture: ComponentFixture<AsignarServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
