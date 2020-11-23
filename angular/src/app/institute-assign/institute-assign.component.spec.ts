import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteAssignComponent } from './institute-assign.component';

describe('InstituteAssignComponent', () => {
  let component: InstituteAssignComponent;
  let fixture: ComponentFixture<InstituteAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteAssignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
