import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BringHomeComponent } from './bring-hope.component';

describe('BringHomeComponent', () => {
  let component: BringHomeComponent;
  let fixture: ComponentFixture<BringHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BringHomeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BringHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
