import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl , Validators } from '@angular/forms';
import { AboutService } from 'src/app/services/about.service';
import { About } from 'src/app/services/interfaces/about';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  usuario : About;
  estadoSesion = false;
  auxUsuario: About | any;
  mensaje: String;
  nuevoAbout: String;


  constructor(private token: TokenService) {
    }

  ngOnInit(): void {

    this.getAbout()
    const myModal = document.getElementById('myModal')
    const myInput = document.getElementById('myInput')


    
    myModal.addEventListener('shown.bs.modal', () => {
      myInput.focus()
    })

    // if(this.token.getToken()){
    //   this.estadoSesion = true
    // }else {
    //   this.estadoSesion = false
    // }
  }

  getAbout(){
    this.usuario=
      {
          "id":         0,
          "nombre":     "Julian Yoel",
          "apellido":   "Peña",
          "titulo":     "Full Stack Web Developer",
          "acercade":   "¡Hola! Me llamo Julian, soy de la provincia de San Juan. Soy desarrollador web en proceso de formación buscando mi primer experiencia laboral, me considero una persona comprometida y responsable con mucha predisposición para dar todo de mi",
          "fotoperfil": "https://i.imgur.com/q732r3w.jpg?1",
      }
    
  }
  editar(usuario: About){
    if (this.estadoSesion == true){
      this.auxUsuario=usuario
      this.nuevoAbout=this.auxUsuario.acercade
    }
  }

  actualizarAbout(aux: String){
    // this.auxUsuario.acercade=aux
    // this.about.modificarUsuario(this.auxUsuario).subscribe(
    //   (response: About) => {
    //     console.log(response);
    //     this.getAbout();
    //     this.mensaje='Datos actualizados correctamente'
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   }
    // )
  }
}
