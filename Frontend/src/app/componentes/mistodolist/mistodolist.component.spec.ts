import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MistodolistComponent } from './mistodolist.component';

describe('MistodolistComponent', () => {
  let component: MistodolistComponent;
  let fixture: ComponentFixture<MistodolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MistodolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MistodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
