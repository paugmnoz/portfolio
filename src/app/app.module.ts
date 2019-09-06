import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { VizComponent } from './components/projects/viz/viz.component';
import { RouterModule, Routes } from '@angular/router';
import { UxComponent } from './components/projects/views/ux/ux.component';
import { UiComponent } from './components/projects/views/ui/ui.component';
import { BrandingComponent } from './components/projects/views/branding/branding.component';
import { WebComponent } from './components/projects/views/web/web.component';
import { IllustrationComponent } from './components/projects/views/illustration/illustration.component';
import { ProjectsModule } from './components/projects/projects.module';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { WoofmeComponent } from './components/case-studies/woofme/woofme.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { LeeloComponent } from './components/case-studies/leelo/leelo.component';
import { WipComponent } from './components/wip/wip.component';
import { BioacousticComponent } from './components/case-studies/bioacoustic/bioacoustic.component';

const appRoutes: Routes = [ 
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects/woofme', component: WoofmeComponent },
  { path: 'projects/bioviz', component: BioacousticComponent},
  { path: 'projects/wip', component: WipComponent },
  { path: '', component: HomeComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProjectsComponent,
    VizComponent,
    UxComponent,
    UiComponent,
    BrandingComponent,
    WebComponent,
    IllustrationComponent,
    AboutComponent,
    ContactComponent,
    WoofmeComponent,
    LeeloComponent,
    WipComponent,
    BioacousticComponent
  ],
  
  imports: [
    BrowserModule,
    SlickCarouselModule,
    RouterModule.forRoot(
      appRoutes,
      { scrollPositionRestoration: 'enabled' }
      //{ enableTracing: true } // <-- debugging purposes only
    ),
    ProjectsModule,
    AppRoutingModule,
    AngularFullpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
