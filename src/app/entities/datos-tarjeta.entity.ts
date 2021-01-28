export interface NotasTarjeta {
    ES: string;
    CA: string;
    EN: string;
}

export interface ResultadoTarjeta {
    titulo_id: string;
    titulo: string;
    zona: string;
    saldo: number;
    fecha: string;
    ampliado: string;
    acumulado?: any;
    importe: number;
    clase: string;
    recargable: string;
    min_credit?: any;
    max_credit?: any;
    mod_credit?: any;
    paso_credit?: any;
    min_viajes: string;
    nueva_validez: string;
    notas: NotasTarjeta;
}

export interface DatosTarjeta {
    status: number;
    error: number;
    resultado: ResultadoTarjeta;
}
