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
    this.listaProyectos.filter(unProyecto => {
      if (unProyecto.id == proyectoid){
        this.nuevoProyecto= unProyecto
      }
    } )
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
}
