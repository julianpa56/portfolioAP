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
  responsiveOptions;

  constructor(private token: TokenService) { 
    this.responsiveOptions = [
      {
        breakpoint: '2800px',
        numVisible: 4,
        numScroll: 1
      },
      {
        breakpoint: '1440px',
        numVisible: 3,
        numScroll: 1
      },
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 1
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.getHabilidades()

    const myModal = document.getElementById('myModalHabilidad')
    const myInput = document.getElementById('myInput')
    
    // myModal.addEventListener('shown.bs.modal', () => {
    //   myInput.focus()
    // })

    this.estado()
  }

  estado(){
    // if(this.token.getToken()){
    //   this.estadoSesion = true
    // }else {
    //   this.estadoSesion = false
    // }
  }

  getHabilidades(){
    this.listaHabilidades=[
      {
        "id":         0,
        "nombre":     "HTML5",
        "porcentaje": 65,
        "logoskill":  "fa-brands fa-html5",
      },
      {
        "id":         1,
        "nombre":     "CSS3",
        "porcentaje": 70,
        "logoskill":  "fa-brands fa-css3-alt",
      },
      {
        "id":         2,
        "nombre":     "Angular",
        "porcentaje": 55,
        "logoskill":  "fa-brands fa-angular",
      },
      {
        "id":         3,
        "nombre":     "Python",
        "porcentaje": 40,
        "logoskill":  "fa-brands fa-python",
      }
    ]
  }

  editar(skillid: Number){
    this.mensaje=''
    this.listaHabilidades.filter(unaHabilidad => {
      if (unaHabilidad .id == skillid){
        this.nuevaHabilidad= unaHabilidad 
      }
    } )
  }

  agregar(){
    this.mensaje=''
    this.nuevaHabilidad= {'id':0,'nombre':'','logoskill':'','porcentaje':0}
  }

  verificar(nueva: Skill){
    let respuesta: Boolean
    if ((nueva.nombre !='') && (nueva.logoskill !='') && (nueva.porcentaje != 0)){
      respuesta= true
    }
    else {
      respuesta = false
    }
    return respuesta
  }

  actualizarHabilidad(nueva: Skill){
    // this.habilidad.modificarHabilidad(nueva).subscribe(
    //   (response: Skill) => {
    //     console.log(response);
    //     console.log(this.listaHabilidades)
    //     this.getHabilidades();
    //     this.mensaje='Datos actualizados correctamente'
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   }
    // )
  }

  eliminarHabilidad(id: Number){
    // this.habilidad.eliminarHabilidad(id).subscribe(
    //   (resp: string) => {
    //     console.log(resp)
    //     this.mensaje='Eliminada Correctamente'
    //     this.getHabilidades()
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   }
    // )
  }

  agregarHabilidad(nueva: Skill){
    // console.log(this.verificar(nueva))
    // if (this.verificar(nueva)){
    //   this.habilidad.agregarHabilidad(nueva).subscribe(
    //     (resp: string) => {
    //       console.log(resp)
    //       this.mensaje='Agregado Correctamente'
    //       this.getHabilidades()
    //     },
    //     (error: HttpErrorResponse) => {
    //       alert(error.message);
    //     }
    //   )
    // }
    // else{
    //   this.mensaje='Verifique los campos'
    // }
  }
}
