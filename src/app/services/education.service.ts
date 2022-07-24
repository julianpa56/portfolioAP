import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from './interfaces/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  url = "https://limitless-island-78007.herokuapp.com/"
  constructor(private http: HttpClient) { }

  public obtenerEducacion(): Observable<Education[]>{
    return this.http.get<Education[]>(this.url+'educacion/lista')
  }

  public modificarEducacion(Educacion : Education): Observable<Education> {
    return this.http.put<Education>(this.url+`educacion/update/${Educacion.id}`,Educacion);
  }

  public agregarEducacion(Educacion: Education): Observable<string>{
    return this.http.post<string>(this.url+'educacion/create',Educacion);
  }

  public eliminarEducacion(id : Number): Observable<string>{
    return this.http.delete<string>(this.url+'educacion/delete/'+id);
  }
}
