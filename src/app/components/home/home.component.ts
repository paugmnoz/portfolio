import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Parallax from 'parallax-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('scene') sceneElement:ElementRef;
  
  ngOnInit() {
  }

  config: any;
  fullpage_api: any;
  scene: any;
  parallaxInstance: any;
  sceneDiv: any;

  ngAfterViewInit() {
    console.log(this.sceneElement.nativeElement);
    this.sceneDiv = this.sceneElement.nativeElement;
    var scene = this.sceneDiv;
    var parallaxInstance = new Parallax(scene);
  }
  constructor() {
     // for more details on config options please visit fullPage.js docs
     this.config = {

      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['', 'love-to', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#menu',

      // fullpage callbacks
      afterResize: () => {
        console.log("After resize");
      },
      afterLoad: (origin, destination, direction) => {
        console.log(origin.index);
      }
    };
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

}
