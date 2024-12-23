import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlegalComponent } from './viewlegal.component';

describe('ViewlegalComponent', () => {
  let component: ViewlegalComponent;
  let fixture: ComponentFixture<ViewlegalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewlegalComponent]
    });
    fixture = TestBed.createComponent(ViewlegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
