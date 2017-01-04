import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import * as $ from "jquery";
import 'slick-carousel/slick/slick';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  ngOnInit() {
    $('.myCarousel').slick({
      centerMode: true,
      dots: true,
      infinite: false,
      centerPadding: '60px',
      slidesToShow: 1
    });
  }

}

