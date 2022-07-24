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

  verificar(nueva: Education){
    let respuesta: Boolean
    if ((nueva.nombre !='') && (nueva.titulo !='') && (nueva.fechaingreso != '') && (nueva.fechaegreso != '') && (nueva.logoinstitucion !='')){
      respuesta= true
    }
    else {
      respuesta = false
    }
    return respuesta
  }

  editar(educacionid: Number){
    this.mensaje=''
    this.listaEducacion.filter(unaEducacion => {
      if (unaEducacion.id == educacionid){
        this.nuevaEducacion= unaEducacion
      }
    } )
  }

  agregar(){
    this.mensaje=''
    this.nuevaEducacion= {'id':0,'nombre':'','titulo':'','fechaingreso':'','fechaegreso':'','logoinstitucion':''}
  }

  actualizarEducacion(nueva: Education){
    console.log(this.verificar(nueva))
    if (this.verificar(nueva)){
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
    else{
      this.mensaje='Verifique los campos'
    }
  }

  eliminarEducacion(id: Number){
    this.educacion.eliminarEducacion(id).subscribe(
      (resp: string) => {
        console.log(resp)
        this.mensaje='Eliminada Correctamente'
        this.getEducacion()
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  agregarEducacion(nueva: Education){
    console.log(this.verificar(nueva))
    if (this.verificar(nueva)){
      this.educacion.agregarEducacion(nueva).subscribe(
        (resp: string) => {
          console.log(resp)
          this.mensaje='Agregada Correctamente'
          this.getEducacion()
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      )
    }
    else{
      this.mensaje='Verifique los campos'
    }
  }
}
