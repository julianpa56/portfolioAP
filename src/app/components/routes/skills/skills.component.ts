import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/services/interfaces/skill';
import { SkillsService } from 'src/app/services/skills.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  listaHabilidades: Skill[]
  
  auxHabilidad: Skill| any;
  nuevaHabilidad: Skill;
  mensaje: string;
  estadoSesion: boolean;

  constructor(private habilidad: SkillsService, private token: TokenService) { }

  ngOnInit(): void {
    this.getHabilidades()

    const myModal = document.getElementById('myModalHabilidad')
    const myInput = document.getElementById('myInput')
    
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

  getHabilidades(){
    this.estado()
    this.habilidad.obtenerProyectos().subscribe(
        (data:Skill[])=>{
          this.listaHabilidades= data
        },
        (err) => {console.log(err)}
    )
  }

  editar(skillid: Number){
    this.listaHabilidades.filter(unaHabilidad => {
      if (unaHabilidad .id == skillid){
        this.nuevaHabilidad= unaHabilidad 
      }
    } )
  }

  actualizarHabilidad(nueva: Skill){
    this.habilidad.modificarHabilidad(nueva).subscribe(
      (response: Skill) => {
        console.log(response);
        console.log(this.listaHabilidades)
        this.getHabilidades();
        this.mensaje='Datos actualizados correctamente'
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
