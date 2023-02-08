import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideTextComponent } from './left-side-text.component';

describe('LeftSideTextComponent', () => {
  let component: LeftSideTextComponent;
  let fixture: ComponentFixture<LeftSideTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftSideTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftSideTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
