import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from '../../services/device-detection.service'

@Component({
  selector: 'app-our-mission',
  templateUrl: './our-mission.component.html',
  styleUrls: ['./our-mission.component.scss']
})
export class OurMissionComponent implements OnInit {
  isMobile: boolean = false;
  constructor(private deviceDetector: DeviceDetectorService) { }

  ngOnInit(): void {
    this.isMobile = this.deviceDetector.isMobile();
  }
}
