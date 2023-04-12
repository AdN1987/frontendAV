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
import { HardSoftComponent } from './componentes/hard-soft/hard-soft.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooderComponent } from './componentes/fooder/fooder.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    AcercaDeComponent,
    BannerComponent,
    ExperienciaLabComponent,
    HardSoftComponent,
    ProyectosComponent,
    FooderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
