import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from './interfaces/about';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  url = "https://limitless-island-78007.herokuapp.com/"
  constructor(private http: HttpClient) { }

  public obtenerUsuario(): Observable<About[]>{
    return this.http.get<About[]>(this.url+'usuario/lista')
  }

  public modificarUsuario(Usuario : About): Observable<About> {
    return this.http.put<About>(this.url+`usuario/update/${Usuario.id}`,Usuario);
  }


}
