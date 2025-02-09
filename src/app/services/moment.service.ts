import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

import { Moment } from '../Moment';
import { Response } from '../Responde';

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}Momentos`

  constructor(private http: HttpClient) { }

  // Trazer todos os momentos cadastrados 
getMoments(): Observable<Response<Moment[]>>{
return this.http.get<Response<Moment[]>>(this.apiUrl)
}

// Trazer o moment atraves do id ele vem de forma individual
getMoment(id:number): Observable<Response<Moment>>{
  const url = `${this.apiUrl}/${id}`
  return this.http.get<Response<Moment>>(url)
  }

// criacao do momento
  createMoment(formData:FormData):Observable<FormData>{
 return this.http.post<FormData>(this.apiUrl, formData);
  }

  // Deletar momento

  removeMoment(id:number){
    const url = `${this.apiUrl}/${id}`
    return this.http.delete(url)
  }

  // Atualizar o momento
  updateMoment(id:number, formData: FormData): Observable<FormData>{
    const url = `${this.apiUrl}/${id}`
    return this.http.put<FormData>(url,formData)
  }

}
