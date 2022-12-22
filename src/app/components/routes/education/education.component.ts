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

  responsiveOptions;

  constructor( private token: TokenService) { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '768px',
          numVisible: 1,
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
    this.getEducacion()
    const myModal = document.getElementById('myModalEducacion')
    const myInput = document.getElementById('myModalEducacion')
    
    myModal.addEventListener('shown.bs.modal', () => {
      myInput.focus()
    })
    this.estado()
  }


  estado(){
    // if(this.token.getToken()){
    //   this.estadoSesion = true
    // }else {
    //   this.estadoSesion = false
    // }
  }

  getEducacion(){
    this.listaEducacion=[
      {
        "id":              0,
        "nombre":          "UNSJ - Facultad de Cs. Exactas Físicas y Naturales",
        "titulo":          "Tecnicatura Universitaria en Programación Web",
        "logoinstitucion": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBbYk3r4xBO5_AdZT6tUAUjIa2I5mjHrU8yXOSWgZcFlL9SEPFWFZp_fdIkeNyjs9DL9k&usqp=CAU",
        "fechaingreso":    "2019",
        "fechaegreso":     "Actualidad",
      },
      {
        "id":              1,
        "nombre":          "Folcademy",
        "titulo":          "UI Development",
        "logoinstitucion": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXa_pXD1vz8x90Ns3YMDpQ4s4x1Xu6wmRDqH-8jxxcGY0qYidutmjuiVidvBPIpOZpdeA&usqp=CAU",
        "fechaingreso":    "2021",
        "fechaegreso":     "2021",
      },
      {
        "id":              2,
        "nombre":          "Folcademy",
        "titulo":          "Front-end Angular",
        "logoinstitucion": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXa_pXD1vz8x90Ns3YMDpQ4s4x1Xu6wmRDqH-8jxxcGY0qYidutmjuiVidvBPIpOZpdeA&usqp=CAU",
        "fechaingreso":    "2022",
        "fechaegreso":     "2022",
      },
      {
        "id":              3,
        "nombre":          "Educacion IT",
        "titulo":          "Python Programming",
        "logoinstitucion": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7f9BjNIlJteJHkBD3IyLAPnM1Ulx3pSUMJFqPYgn8NhmYcenEHUEX8bCUZnfIiPZOMhs&usqp=CAU",
        "fechaingreso":    "2021",
        "fechaegreso":     "2021",
      },
      {
        "id":              4,
        "nombre":          "Argentina Programa",
        "titulo":          "Programador Web Full-stack",
        "logoinstitucion": "https://i.imgur.com/ssiXbsh.jpg",
        "fechaingreso":    "2021",
        "fechaegreso":     "2022",
      },
      {
        "id":              5,
        "nombre":          "San Juan TEC",
        "titulo":          "Curso de CSS Avanzado",
        "logoinstitucion": "https://i.imgur.com/CTwt6Ww.jpg",
        "fechaingreso":    "2022",
        "fechaegreso":     "2022",
      },
    ]
  }

  verificar(nueva: Education){
    // let respuesta: Boolean
    // if ((nueva.nombre !='') && (nueva.titulo !='') && (nueva.fechaingreso != '') && (nueva.fechaegreso != '') && (nueva.logoinstitucion !='')){
    //   respuesta= true
    // }
    // else {
    //   respuesta = false
    // }
    // return respuesta
  }

  editar(educacionid: Number){
    // this.mensaje=''
    // this.listaEducacion.filter(unaEducacion => {
    //   if (unaEducacion.id == educacionid){
    //     this.nuevaEducacion= unaEducacion
    //   }
    // } )
  }

  agregar(){
    this.mensaje=''
    this.nuevaEducacion= {'id':0,'nombre':'','titulo':'','fechaingreso':'','fechaegreso':'','logoinstitucion':''}
  }

  actualizarEducacion(nueva: Education){
    // console.log(this.verificar(nueva))
    // if (this.verificar(nueva)){
    //   this.educacion.modificarEducacion(nueva).subscribe(
    //     (response: Education) => {
    //       console.log(response);
    //       console.log(this.listaEducacion)
    //       this.getEducacion();
    //       this.mensaje='Datos actualizados correctamente'
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

  eliminarEducacion(id: Number){
    // this.educacion.eliminarEducacion(id).subscribe(
    //   (resp: string) => {
    //     console.log(resp)
    //     this.mensaje='Eliminada Correctamente'
    //     this.getEducacion()
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   }
    // )
  }

  agregarEducacion(nueva: Education){
    // console.log(this.verificar(nueva))
    // if (this.verificar(nueva)){
    //   this.educacion.agregarEducacion(nueva).subscribe(
    //     (resp: string) => {
    //       console.log(resp)
    //       this.mensaje='Agregada Correctamente'
    //       this.getEducacion()
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
