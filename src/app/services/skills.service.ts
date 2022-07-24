import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from './interfaces/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  url = "https://limitless-island-78007.herokuapp.com/"
  constructor(private http: HttpClient) { }

  public obtenerProyectos(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.url+'skills/lista')
  }

  public modificarHabilidad(Habilidad : Skill): Observable<Skill> {
    return this.http.put<Skill>(this.url+`skills/update/${Habilidad.id}`,Habilidad);
  }

  public agregarHabilidad(Habilidad: Skill): Observable<string>{
    return this.http.post<string>(this.url+'skills/create',Habilidad);
  }

  public eliminarHabilidad(id : Number): Observable<string>{
    return this.http.delete<string>(this.url+'skills/delete/'+id);
  }
}
