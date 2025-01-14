import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescatadosComponent } from './rescatados.component';

describe('RescatadosComponent', () => {
  let component: RescatadosComponent;
  let fixture: ComponentFixture<RescatadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RescatadosComponent]
    });
    fixture = TestBed.createComponent(RescatadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
