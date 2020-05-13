import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import enterView from 'enter-view';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @ViewChild('hola') one: ElementRef;
  that = this;
  constructor() { }

  ngOnInit() {
    enterView({
      selector: '.step',
      enter(el){
          el.classList.add('entered');
      },
      exit: (el) => {
        el.classList.remove('entered');
      },
      progress: (el, progress) => {
        el.style.opacity = progress;
      },
      offset: 0.5, // enter at middle of viewport
      once: false, // trigger just once
    });
  }

}
