import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoApComponent } from './componentes/logo-ap/logo-ap.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { ExperienciaLabComponent } from './componentes/experiencia-lab/experiencia-lab.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooderComponent } from './componentes/fooder/fooder.component';
import  {HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interseptor-service';
import { NewExperienciaComponent } from './componentes/experiencia-lab/new-experiencia.component';
import { CommonModule } from '@angular/common';
import { EditExperienciaComponent } from './componentes/experiencia-lab/edit-experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { HysComponent } from './componentes/hys/hys.component';
import { EditSkillComponent } from './componentes/hys/edit-skill.component';
import { NewSkillComponent } from './componentes/hys/new-skill.component';
import { EditAcercaDeComponent } from './componentes/acerca-de/edit-acerca-de.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    AcercaDeComponent,
    BannerComponent,
    ExperienciaLabComponent,
    ProyectosComponent,
    FooderComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EducacionComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    HysComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAcercaDeComponent,
    EditProyectoComponent,
    NewProyectoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,

  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
