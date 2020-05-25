import { Component, OnInit, OnChanges, ViewChild, ElementRef } from '@angular/core';
import enterView from 'enter-view';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @ViewChild('hola') one: ElementRef;

  constructor() { }
  step = '-1';
  timeZero = true;
  timeOne = false;
  timeTwo = false;
  timeThree = false;
  timeFour = false;
  timeFive = false;
  timeSix = false;
  ngOnInit() {
    var that = this;
    enterView({
      selector: '.step',
      enter(el) {
        var activeStep = el.dataset.index;
        el.classList.add('entered');
        el.classList.remove('passed');

        that.updateChart(activeStep, 'Enter');
      },
      exit: (el) => {
        el.classList.remove('entered');
        el.classList.add('passed');
        const activeStepTwo = el.dataset.index - 1;
        that.updateChart(activeStepTwo, 'Exit');

      },
      progress: (el, progress) => {
        el.style.opacity = progress;
      },
      offset: 0.3, // enter at middle of viewport
      once: false, // trigger just once
    });
  }
  updateChart(received, str) {
    this.step = received + '';
    console.log(this.step, str);

    if (this.step === '-1' ) {
      this.timeZero =  true;
      console.log(received, str);
    } else  {
      this.timeZero =  false;
      console.log(received, str);
    }

    if (this.step === '0' ) {
      this.timeOne =  true;
      console.log(received, str);
    } else  {
      this.timeOne =  false;
      console.log(received, str);
    }

    if (this.step === '1') {
      this.timeTwo =  true;
      console.log(received, str);
    } else  {
      this.timeTwo =  false;
      console.log(received, str);
    }

    if (this.step === '2') {
      this.timeThree =  true;
      console.log(received, str);
    } else  {
      this.timeThree =  false;
      console.log(received, str);
    }
    if (this.step === '3') {
      this.timeFour =  true;
      console.log(received, str);
    } else  {
      this.timeFour =  false;
      console.log(received, str);
    }
    if (this.step === '4') {
      this.timeFive =  true;
      console.log(received, str);
    } else  {
      this.timeFive =  false;
      console.log(received, str);
    }

    if (this.step === '5') {
      this.timeSix =  true;
      console.log(received, str);
    } else  {
      this.timeSix =  false;
      console.log(received, str);
    }
  }
}
