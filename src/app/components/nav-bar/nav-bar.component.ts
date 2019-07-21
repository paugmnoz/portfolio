import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isChecked = false;
  constructor() { }

  ngOnInit() {
  }
  checkValue(event: any){
    console.log(event);
 }

 hidemenu(){
   this.isChecked = !this.isChecked;
   console.log('hola', this.isChecked)
 }
}
