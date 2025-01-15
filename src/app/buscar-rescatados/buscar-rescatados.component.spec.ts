import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarRescatadosComponent } from './buscar-rescatados.component';

describe('BuscarRescatadosComponent', () => {
  let component: BuscarRescatadosComponent;
  let fixture: ComponentFixture<BuscarRescatadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarRescatadosComponent]
    });
    fixture = TestBed.createComponent(BuscarRescatadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
