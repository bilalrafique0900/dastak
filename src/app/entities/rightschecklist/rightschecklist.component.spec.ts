import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightschecklistComponent } from './rightschecklist.component';

describe('RightschecklistComponent', () => {
  let component: RightschecklistComponent;
  let fixture: ComponentFixture<RightschecklistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightschecklistComponent]
    });
    fixture = TestBed.createComponent(RightschecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
