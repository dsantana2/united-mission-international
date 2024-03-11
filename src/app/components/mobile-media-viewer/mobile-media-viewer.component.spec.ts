import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMediaViewerComponent } from './mobile-media-viewer.component';

describe('MobileMediaViewerComponent', () => {
  let component: MobileMediaViewerComponent;
  let fixture: ComponentFixture<MobileMediaViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileMediaViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileMediaViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
