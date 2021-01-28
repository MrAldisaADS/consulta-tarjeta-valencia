import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosTarjeta } from '../entities/datos-tarjeta.entity';

@Injectable({
  providedIn: 'root'
})
export class TarjetasService {

  constructor(private http: HttpClient) { }

  getDatosTarjeta(numTarjeta: string): Observable<any> {
    return this.http.get(`http://localhost:4200/api/tarjetas-transporte/${numTarjeta}`);
  }
}
