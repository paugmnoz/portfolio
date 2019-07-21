import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  uxState:boolean = true;
  uiState:boolean = true;
  brandState:boolean = true;
  illuState:boolean = true;
  webState:boolean = true;
  vizState:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onSelect(selection:string){
    switch(selection){
      case 'overview':
          this.uxState = true;
          this.vizState = false;
          this.uiState = true;
          this.webState = true;
          this.brandState = true;
          this.illuState = true;
        break;
      case 'ux':
          this.vizState = true;
          this.uxState = false;
          this.uiState = true;
          this.webState = true;
          this.brandState = true;
          this.illuState = true;
        break;
      case 'ui':
          this.vizState = true;
          this.uxState = true;
          this.uiState = false;
          this.webState = true;
          this.brandState = true;
          this.illuState = true;
        break;
      case 'bran':
          this.vizState = true;
          this.uxState = true;
          this.uiState = true;
          this.webState = true;
          this.brandState = false;
          this.illuState = true;
        break;
      case 'web':
          this.vizState = true;
          this.uxState = true;
          this.uiState = true;
          this.webState = false;
          this.brandState = true;
          this.illuState = true;
        break;
      case 'illu':
          this.vizState = true;
          this.uxState = true;
          this.uiState = true;
          this.webState = true;
          this.brandState = true;
          this.illuState = false;
        break;
    }
  }

}
