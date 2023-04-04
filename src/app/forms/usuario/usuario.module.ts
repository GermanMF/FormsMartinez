import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsuarioComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [UsuarioComponent],
})
export class UsuarioModule {}
