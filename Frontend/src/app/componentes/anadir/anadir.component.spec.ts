import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirComponent } from './anadir.component';

describe('AnadirComponent', () => {
  let component: AnadirComponent;
  let fixture: ComponentFixture<AnadirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
