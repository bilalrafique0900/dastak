import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelliconComponent } from './bellicon.component';

describe('BelliconComponent', () => {
  let component: BelliconComponent;
  let fixture: ComponentFixture<BelliconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BelliconComponent]
    });
    fixture = TestBed.createComponent(BelliconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
