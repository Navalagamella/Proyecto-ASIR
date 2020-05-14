import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivadoComponent } from './privado.component';

describe('PrivadoComponent', () => {
  let component: PrivadoComponent;
  let fixture: ComponentFixture<PrivadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
