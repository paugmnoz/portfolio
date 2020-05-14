import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import enterView from 'enter-view';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @ViewChild('hola') one: ElementRef;
 
  constructor() { }

  ngOnInit() {
    var that = this;
    enterView({
      selector: '.step',
      enter(el){
        var activeStep = el.dataset.index;
        el.classList.add('entered');
        that.updateChart(activeStep,  'Enter');
      },
      exit: (el) => {
        el.classList.add('passed');
        el.classList.remove('entered');
        var _activeStep = el.dataset.index - 1;
        that.updateChart(_activeStep, 'Exit');

      },
      progress: (el, progress) => {
        el.style.opacity = progress;
      },
      offset: 0.5, // enter at middle of viewport
      once: false, // trigger just once
    });
  }
  updateChart(received, str) {
    console.log(received, str);
  }
}
