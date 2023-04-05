import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent {
  rndInt = Math.floor(Math.random() * 100000000) + 1;

  padded = this.rndInt.toString().padStart(8, '0');

  usuarioForm: FormGroup = new FormGroup({});

  claveControl = new FormControl(this.padded, [Validators.required]);
  nombreControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);
  apellidoControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);
  emailControl = new FormControl('', [Validators.email]);
  tipoControl = new FormControl('', [Validators.required]);

  constructor() {
    this.usuarioForm = new FormGroup({
      clave: this.claveControl,
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      email: this.emailControl,
      tipo: this.tipoControl,
    });
  }

  onSubmit(): void {
    if (this.usuarioForm.valid) {
      alert('Este form es valido');
      this.usuarioForm.reset();
    } else {
      this.usuarioForm.markAllAsTouched();
    }
    console.log(this.usuarioForm);
  }
}
