import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdastakvisitComponent } from './viewdastakvisit.component';

describe('ViewdastakvisitComponent', () => {
  let component: ViewdastakvisitComponent;
  let fixture: ComponentFixture<ViewdastakvisitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewdastakvisitComponent]
    });
    fixture = TestBed.createComponent(ViewdastakvisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
