import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  estadoSesion = false;

  aux : number = 0

  constructor( private authService : AutenticacionService, private token: TokenService , private router : Router) {
    this.scrollVariable()
  }

  scrollVariable(){
    fromEvent(document, 'scroll').subscribe(
      a => this.aux = 
        (document.documentElement.scrollTop === 0)
          ? 0
          : 1
    );
  }

  ngOnInit(): void {
    if(this.token.getToken()){
      this.estadoSesion = true
    }else {
      this.estadoSesion = false
    }

    this.scrollVariable()
  }

  logOut(){
    this.token.logOut();
    this.router.navigate(['/']);
    window.location.reload();
  }

}
