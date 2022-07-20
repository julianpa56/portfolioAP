import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../clases/login-usuario';
import { JwtDTO } from '../clases/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url= 'https://limitless-island-78007.herokuapp.com/auth/';
  constructor(private http:HttpClient) {  
    console.log("El servicio de autenticacion esta corriendo")
  }

  public IniciarSesion(loginUsuario: LoginUsuario): Observable < JwtDTO > {
        return this.http.post<JwtDTO>(this.url + 'login', loginUsuario)
  }

}
