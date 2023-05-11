import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit{
  nombre: string;
  fecha: number;
  descripcion: string;
  page: string;

  constructor (private sProyecto: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const Proyecto = new proyecto(this.nombre, this.fecha, this.descripcion, this.page);
    this.sProyecto.save(Proyecto).subscribe(
      data=> {
        alert("proyecto creado correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al añadir el proyecto");
        this.router.navigate(['']);
      }
    )
    }


}
