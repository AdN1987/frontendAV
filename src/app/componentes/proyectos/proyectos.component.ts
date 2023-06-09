import { Component, OnInit } from '@angular/core';
import { proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{

  Proyecto: proyecto[]=[];

  constructor (private sProyecto: ProyectoService, private tokenService: TokenService) { }
  isLogged= false;


  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else
    this.isLogged = false;
  }

  cargarProyecto(): void{
    this.sProyecto.lista().subscribe(
      data => {
        this.Proyecto = data;
      }
    )
  }


  delete(id: number){
    if (id != undefined){
      this.sProyecto.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert ("No se pudo borrar el proyecto");
        }
      )
    }
  }
}
