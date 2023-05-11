import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit{
  Proyecto: proyecto = null;


  constructor(private sProyecto: ProyectoService, private activatedRouter : ActivatedRoute,private router: Router) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe(
      data => {
        this.Proyecto = data;
      }, err =>{
        alert("error al modificar");
        this.router.navigate(['']);
      }
    )
  }


  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.update(id, this.Proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert("error al modificar el proyecto");
        this.router.navigate(['']);
      }
    )

  }

}
