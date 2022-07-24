import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyect } from './interfaces/proyect';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {

  url = "https://limitless-island-78007.herokuapp.com/"
  constructor(private http: HttpClient) { }

  public obtenerProyectos(): Observable<Proyect[]>{
    return this.http.get<Proyect[]>(this.url+'proyectos/lista')
  }

  public modificarProyecto(Proyecto : Proyect): Observable<Proyect> {
    return this.http.put<Proyect>(this.url+`proyectos/update/${Proyecto.id}`,Proyecto);
  }

  public agregarProyecto(Proyecto: Proyect): Observable<string>{
    return this.http.post<string>(this.url+'proyectos/create',Proyecto);
  }

  public eliminarProyecto(id : Number): Observable<string>{
    return this.http.delete<string>(this.url+'proyectos/delete/'+id);
  }
}
