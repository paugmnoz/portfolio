import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Parallax from 'parallax-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('scene') sceneElement: ElementRef;
  @ViewChild('mob_scene') mobSceneElement: ElementRef;
  @ViewChild('scene2') sceneElement2: ElementRef;
  @ViewChild('scene3') sceneElement3: ElementRef;

  mobile = false;
  desktop = true;
  ngOnInit() {

    window.onresize = () => {
      this.mobile = window.innerWidth <= 780;
      this.desktop = !this.mobile;
    }
    
  }

  config: any;
  fullpage_api: any;
  scene: any;
  sceneDiv: any;
  mobSceneDiv: any;
  sceneDiv2: any;
  sceneDiv3: any;

  ngAfterViewInit() {
    console.log(this.sceneElement.nativeElement);
    this.sceneDiv = this.sceneElement.nativeElement;
    this.mobSceneDiv = this.sceneElement.nativeElement;
    this.sceneDiv2 = this.sceneElement2.nativeElement;
    this.sceneDiv3 = this.sceneElement3.nativeElement;

    var scene = this.sceneDiv;
    var mobScene = this.mobSceneDiv;
    var scene2 = this.sceneDiv2;
    var scene3 = this.sceneDiv3;

    var parallaxInstance = new Parallax(scene);
    var mobParallaxInstance = new Parallax(mobScene);
    var parallaxInstance2 = new Parallax(scene2);
    var parallaxInstance3 = new Parallax(scene3);
  }
  constructor() {
    // for more details on config options please visit fullPage.js docs
    this.config = {

      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['', 'love-to', 'featured-projects', 'footer'],
      menu: '#menu',
      showActiveTooltip: true,
      slidesNavigation: true,
      slidesNavPosition: 'bottom',
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
