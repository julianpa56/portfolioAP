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

  this.usuarioService.obtenerUsuario().subscribe(
      (data:About[])=>{
        this.usuario= data[0]
      },
      (err) => {console.log(err)}
    )
  }

}
