import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';


import { ProjectsRoutingModule } from './projects-routing.module';


@NgModule({

  imports: [
    ProjectsRoutingModule,
    SlickCarouselModule,
  ],
  providers: [],
})
export class ProjectsModule { }
