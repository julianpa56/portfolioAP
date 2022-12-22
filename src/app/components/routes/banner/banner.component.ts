import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';
import { About } from 'src/app/services/interfaces/about';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  usuario: About
  constructor(private usuarioService: AboutService) { }

  ngOnInit(): void {

  this.usuario={
    "id":         0,
    "nombre":     "Julian Yoel",
    "apellido":   "Peña",
    "titulo":     "Full Stack Web Developer",
    "acercade":   "¡Hola! Me llamo Julian, soy de la provincia de San Juan. Soy desarrollador web en proceso de formación buscando mi primer experiencia laboral, me considero una persona comprometida y responsable con mucha predisposición para dar todo de mi",
    "fotoperfil": "https://i.imgur.com/q732r3w.jpg?1",
  }
  }
}
