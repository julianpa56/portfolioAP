import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';
import { Education } from 'src/app/services/interfaces/education';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  listaEducacion: Education[]
  estadoSesion= false
  nuevaEducacion: Education 
  mensaje: String;

  constructor(private educacion: EducationService, private token: TokenService) { }

  ngOnInit(): void {
    this.getEducacion()
    const myModal = document.getElementById('myModalEducacion')
    const myInput = document.getElementById('myModalEducacion')
    
    myModal.addEventListener('shown.bs.modal', () => {
      myInput.focus()
    })
    this.estado()
  }


  estado(){
    if(this.token.getToken()){
      this.estadoSesion = true
    }else {
      this.estadoSesion = false
    }
  }

  getEducacion(){
    this.estado()
    this.educacion.obtenerEducacion().subscribe(
        (data:Education[])=>{
          this.listaEducacion= data
        },
        (err) => {console.log(err)}
    )
  }

  async editar(educacionid: Number){
    this.listaEducacion.filter(unaEducacion => {
      if (unaEducacion.id == educacionid){
        this.nuevaEducacion= unaEducacion
      }
    } )
  }

  actualizarEducacion(nueva: Education){
    this.educacion.modificarEducacion(nueva).subscribe(
      (response: Education) => {
        console.log(response);
        console.log(this.listaEducacion)
        this.getEducacion();
        this.mensaje='Datos actualizados correctamente'
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
