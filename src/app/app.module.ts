import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioModule } from './forms/usuario/usuario.module';

import { AppComponent } from './app.component';
import { CredencialesComponent } from './forms/credenciales/credenciales.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { AlumnosComponent } from './content/alumnos/alumnos.component';
import { CardComponent } from './components/card/card.component';
import { UsuarioComponent } from './forms/usuario/usuario.component';

const routes: Routes = [
  {path: 'form/credencial', component: CredencialesComponent},
  {path: 'form/usuario', component: UsuarioComponent},
  {path: 'alumnos', component: AlumnosComponent},
  {path: '', redirectTo: '/alumnos', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    CredencialesComponent,
    NavbarComponent,
    SidebarComponent,
    WrapperComponent,
    AlumnosComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuarioModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
