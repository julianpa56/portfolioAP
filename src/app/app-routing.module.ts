import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/routes/about/about.component';
import { BannerComponent } from './components/routes/banner/banner.component';
import { EducationComponent } from './components/routes/education/education.component';
import { FormContactComponent } from './components/routes/form-contact/form-contact.component';
import { ProyectsComponent } from './components/routes/proyects/proyects.component';
import { SkillsComponent } from './components/routes/skills/skills.component';

const routes: Routes = [
  {path:'' , component: BannerComponent},
  {path:'about', component: AboutComponent},
  {path:'education', component: EducationComponent},
  {path:'skills' , component: SkillsComponent },
  {path:'proyects' , component: ProyectsComponent },
  {path:'contact' , component: FormContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
