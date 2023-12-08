import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextMissionComponent } from './next-mission.component';

describe('NextMissionComponent', () => {
  let component: NextMissionComponent;
  let fixture: ComponentFixture<NextMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextMissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
