import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Proyect } from 'src/app/services/interfaces/proyect';
import { ProyectsService } from 'src/app/services/proyects.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  listaProyectos: Proyect[];
  nuevoProyecto: Proyect;
  mensaje: String;
  estadoSesion= false;

  constructor(private proyecto: ProyectsService, private token: TokenService) { }

  ngOnInit(): void {
    this.getProyectos()
    const myModal = document.getElementById('myModalProyectos')
    const myInput = document.getElementById('myModalProyectos')
    
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

  getProyectos(){
    this.estado()
    this.proyecto.obtenerProyectos().subscribe(
        (data:Proyect[])=>{
          this.listaProyectos= data
        },
        (err) => {console.log(err)}
    )
  }

  editar(proyectoid: Number){
    this.mensaje=''
    this.listaProyectos.filter(unProyecto => {
      if (unProyecto.id == proyectoid){
        this.nuevoProyecto= unProyecto
      }
    } )
  }

  agregar(){
    this.mensaje=''
    this.nuevoProyecto= {'id':0,'nombre':'','descripcion':'','fecharealizacion':'','linkproyecto':''}
  }

  verificar(nuevo: Proyect){
    let respuesta: Boolean
    if ((nuevo.nombre !='') && (nuevo.descripcion !='') && (nuevo.fecharealizacion != '') && (nuevo.linkproyecto != '')){
      respuesta= true
    }
    else {
      respuesta = false
    }
    return respuesta
  }

  actualizarProyecto(nuevo: Proyect){
    this.proyecto.modificarProyecto(nuevo).subscribe(
      (response: Proyect) => {
        console.log(response);
        console.log(this.listaProyectos)
        this.getProyectos();
        this.mensaje='Datos actualizados correctamente'
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  eliminarProyecto(id: Number){
    this.proyecto.eliminarProyecto(id).subscribe(
      (resp: string) => {
        console.log(resp)
        this.mensaje='Eliminado Correctamente'
        this.getProyectos()
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  agregarProyecto(nuevo: Proyect){
    console.log(this.verificar(nuevo))
    if (this.verificar(nuevo)){
      this.proyecto.agregarProyecto(nuevo).subscribe(
        (resp: string) => {
          console.log(resp)
          this.mensaje='Agregado Correctamente'
          this.getProyectos()
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
