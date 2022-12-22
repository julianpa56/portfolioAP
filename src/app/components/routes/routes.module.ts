import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import {CarouselModule} from 'primeng/carousel';



@NgModule({
  declarations: [
    BannerComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    ProyectsComponent,
    ContenedorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    CarouselModule
  ],
  exports: [ContenedorComponent]
})
export class RoutesModule { }
