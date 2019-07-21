import { RouterModule, Routes } from '@angular/router';
import { UxComponent } from './views/ux/ux.component';
import { IllustrationComponent } from './views/illustration/illustration.component';
import { WebComponent } from './views/web/web.component';
import { BrandingComponent } from './views/branding/branding.component';
import { UiComponent } from './views/ui/ui.component';
import { NgModule }             from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { VizComponent } from './viz/viz.component';
import { WoofmeComponent } from '../case-studies/woofme/woofme.component';


  const projectsRoutes: Routes = [
    { path: 'projects',  
      component: ProjectsComponent,
      children: [
        {
          path: '',
          component: VizComponent
        },
        {
          path: 'uxresearch',
          component: UxComponent
        },
        { 
          path: 'ui',
          component: UiComponent 
        },
        { 
          path: 'branding', 
          component: BrandingComponent 
        },
        { 
          path: 'web', 
          component: WebComponent 
        },
        { 
          path: 'illustration', 
          component: IllustrationComponent 
        },
        { 
          path: 'woof-me', 
          component: WoofmeComponent 
        }
        
      ]
    },
    
  ];

  
@NgModule({
    imports: [
      RouterModule.forChild(projectsRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class ProjectsRoutingModule { }