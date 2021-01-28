import { Component, OnInit } from '@angular/core';
import { DatosTarjeta, NotasTarjeta, ResultadoTarjeta } from './entities/datos-tarjeta.entity';
import { TarjetasService } from './tarjetas-service/tarjetas-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private readonly tarjetasService: TarjetasService) { }
  numeroTarjeta: string;
  numeroTarjetaBuscada: String = null;

  resultTarjeta: ResultadoTarjeta = null;
  datosTarjeta: DatosTarjeta = null;

  showLoader: boolean = false;
  showError: boolean = false;

  tituloTarjeta = null;
  zonaTarjeta = null;
  claseTarjeta = null;
  validezTarjeta = null;
  saldoTarjeta = null;

  public getDatosTarjeta() {
    this.showLoader = true;
    this.showError = false;
    this.tarjetasService.getDatosTarjeta(this.numeroTarjeta).subscribe((res: DatosTarjeta) => {
      this.showLoader = false;
      console.log(res);
      this.resultTarjeta = res.resultado;

      this.tituloTarjeta = this.resultTarjeta.titulo;
      this.zonaTarjeta = this.resultTarjeta.zona;
      this.claseTarjeta = this.resultTarjeta.clase;
      this.validezTarjeta = this.resultTarjeta.nueva_validez;
      this.saldoTarjeta = this.resultTarjeta.saldo;

      this.numeroTarjetaBuscada = this.numeroTarjeta.substring(0, 4).concat(' ').concat(this.numeroTarjeta.substring(4, 8).concat(' ').concat(this.numeroTarjeta.substring(8)));

    }, err => {
      this.showLoader = false;
      this.showError = true;
      this.resultTarjeta = null;
      console.log(err);
    });
  }

  closeError() {
    this.showError = false;
  }

  ngOnInit(): void {

  }









}
