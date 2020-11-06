import { Injectable } from '@angular/core';
import { TipoDoc } from './tipo-doc';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TipoDocService {
  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'});
  private urltipo: string='http://localhost:9090/tipodoc/lista';
  constructor(private http:HttpClient) { }
  getRoles():Observable<TipoDoc[]>{
    return this.http.get<TipoDoc[]>(this.urltipo);
  }
}
