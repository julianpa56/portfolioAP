import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormContactComponent } from './form-contact/form-contact.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectsComponent } from './proyects/proyects.component';



@NgModule({
  declarations: [
    FormContactComponent,
    BannerComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    ProyectsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RoutesModule { }
