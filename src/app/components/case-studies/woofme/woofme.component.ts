import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-woofme',
  templateUrl: './woofme.component.html',
  styleUrls: ['./woofme.component.scss']
})
export class WoofmeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
  slides = [
    {img: "../../../../assets/projects/woof/app/1.png", ti:"INITIAL SCREEN", te:"Welcome screen"},
    {img: "../../../../assets/projects/woof/app/2.png", ti:"GENERAL HOME SCREEN", te:"Create a dog profile"},
    {img: "../../../../assets/projects/woof/app/3.png", ti:"GENERAL HOME SCREEN", te:"Create a dog profile"},
    {img: "../../../../assets/projects/woof/app/4.png", ti:"UNSET PROFILE HOME SCREEN", te:"Dog owners will be asked to set a goal for the training according to their schedule."},
    {img: "../../../../assets/projects/woof/app/5.png", ti:"PROFILE HOME SCREEN", te:"Feedback about goal status, and call to action in case today’s isn’t reach yet."},
    {img: "../../../../assets/projects/woof/app/7.png", ti:"TRAINING SESSION SCREEN ", te:"During training sessions, dogs owners will be asked to record the excercises shown in the video guide."},
    {img: "../../../../assets/projects/woof/app/6.png", ti:"DOG BEHAVIOR STATS SCREEN", te:"With the data recorded during sessions and the inclinometer of the vest, owners will be capable of see data stats about their dog’s behavior through time."}
  ];

  slideConfig = {
    'centerMode': true,
    "slidesToShow": 3, 
    "nextArrow":"<div class='nav-btn next-slide' style='cursor:pointer'><img class='' src='../../../../../assets/nav-icon-right.svg' width='30px' alt=''></div>",
    "prevArrow":"<div class='nav-btn prev-slide' style='cursor:pointer'><img class='' src='../../../../../assets/nav-icon-left.svg' width='30px' alt=''></div>",
    "dots":true,
    "infinite": false,
    'responsive': [ 
      {
        'breakpoint': '600px',
        settings: {
          'slidesToShow': 2,
          'slidesToScroll': 2
        }
      },
    ]
  };

  
  slideConfigmobile = {
    'centerMode': false,
    "slidesToShow": 1, 
  "dots":true,
    "infinite": false,
    'responsive': [ 
      {
        'breakpoint': '600px',
        settings: {
          'slidesToShow': 1,
          'slidesToScroll': 1
        }
      },
    ]
  };
  slickInit(e) {
    console.log('slick initialized');
  }
  breakpoint(e) {
    console.log('breakpoint');
  }
  afterChange(e) {
    console.log('afterChange');
  }
  beforeChange(e) {
    console.log('beforeChange');
  }
}
