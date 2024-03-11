import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ElementsService } from 'src/app/services/elements.service';
import { MobileMenuService } from '../../services/mobile-menu.service';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss']
})
export class MissionsComponent implements OnInit, AfterViewInit {
  scrollDirection: 'down' | 'up' = "down";
  @ViewChildren('section') mycomponents: QueryList<any>;
  viewPortHeight: number;
  missionLayoutHeight: number;
  layoutView: 'page' | 'list' = 'page';
  navigationHeight: number;
  showGallery: boolean = false;
  gallery: any = [
    {
      src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-one.webp',
      text: '',
    },
    {
      src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-two.webp',
      text: ''
    },
    {
      src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-three.webp',
      text: ''
    },
    {
      src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-one.webp',
      text: '',
    },
    {
      src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-two.webp',
      text: ''
    },
    {
      src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-three.webp',
      text: ''
    },
    {
      src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-one.webp',
      text: '',
    },
    {
      src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-two.webp',
      text: ''
    },
    {
      src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-three.webp',
      text: ''
    },
    {
      src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-three.webp',
      text: ''
    },
    {
      src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-one.webp',
      text: '',
    },
    {
      src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-two.webp',
      text: ''
    },
    {
      src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-three.webp',
      text: ''
    },
    {
      src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-three.webp',
      text: ''
    },
    {
      src: 'https://d337lrhmtj9qpq.cloudfront.net/carosel/carosel-photo-three.webp',
      text: ''
    }
  ];
  constructor(private elementsService: ElementsService, private mobileMenuService: MobileMenuService) { }

  missions: { view: 'gallery' | 'cover' | 'info', country: string, continent: string, date: string, message: string, money_raised: string, cover: string }[] = [
    {
      country: 'Kenya', continent: 'Africa', date: '8/21/1994',
      message: 'We have been blessed to get to know amazing people through our mission trips across Africa and Central America.',
      money_raised: '$5,600',
      cover: 'https://static.wixstatic.com/media/bf1fba_39c01b308b71496bbaf1d2f335193631~mv2.jpg/v1/fit/w_1187,h_791,q_90/bf1fba_39c01b308b71496bbaf1d2f335193631~mv2.jpg',
      view: 'cover'
    },
    {
      country: 'Kenya', continent: 'Africa', date: '8/21/1994',
      message: 'We have been blessed to get to know amazing people through our mission trips across Africa and Central America.',
      money_raised: '$5,600',
      cover: 'https://static.wixstatic.com/media/bf1fba_39c01b308b71496bbaf1d2f335193631~mv2.jpg/v1/fit/w_1187,h_791,q_90/bf1fba_39c01b308b71496bbaf1d2f335193631~mv2.jpg',
      view: 'cover'
    },
    {
      country: 'Kenya', continent: 'Africa', date: '8/21/1994',
      message: 'We have been blessed to get to know amazing people through our mission trips across Africa and Central America.',
      money_raised: '$5,600',
      cover: 'https://static.wixstatic.com/media/bf1fba_39c01b308b71496bbaf1d2f335193631~mv2.jpg/v1/fit/w_1187,h_791,q_90/bf1fba_39c01b308b71496bbaf1d2f335193631~mv2.jpg',
      view: 'cover'
    }];

  ngOnInit(): void {
    this.viewPortHeight = this.elementsService.getViewPortData().height;
    this.missionLayoutHeight = this.elementsService.getViewPortData().height;

    this.navigationHeight = (this.elementsService.getNavigationBarElementData().height +
      this.elementsService.getLogoElementData().height);
  }

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.caroselHeight = window.innerHeight - (this.elementsService.getNavigationBarElementData().height +
    //     this.elementsService.getLogoElementData().height) + 'px';
    // })
  }

  changeLayout(layoutView: 'page' | 'list') {
    this.layoutView = layoutView;
    console.log(this.layoutView)
    if (layoutView == 'page') {
      this.missionLayoutHeight = this.elementsService.getViewPortData().height;
    } else {
      this.missionLayoutHeight = 300;

    }
  }

  showHideMobileMenu() {
    this.mobileMenuService.openHideMobileMenu.next({});
  }

}
