export class proyecto {
  id?: number;
  nombre: string;
  fecha: number;
  descripcion: string;
  page: string;

  constructor(nombre: string,fecha: number,descripcion: string,page: string){
    this.nombre = nombre;
    this.fecha = fecha;
    this.descripcion = descripcion;
    this.page = page;
  }
}
