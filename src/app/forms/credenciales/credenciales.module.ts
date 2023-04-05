import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CredencialesComponent } from './credenciales.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CredencialesComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CredencialesComponent]
})
export class CredencialesModule { }
