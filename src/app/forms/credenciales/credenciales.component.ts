import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-credenciales',
  templateUrl: './credenciales.component.html',
  styleUrls: ['./credenciales.component.css']
})
export class CredencialesComponent {
  credencialForm: FormGroup = new FormGroup({});
  usuarioControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
  sistemaControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  confirmPasswordControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  ambienteControl = new FormControl('', [Validators.required]);

  constructor() {
    this.credencialForm = new FormGroup({
      sistema: this.sistemaControl,
      usuario: this.usuarioControl,
      password: this.passwordControl,
      confirmPassword: this.confirmPasswordControl,
      ambiente: this.ambienteControl
    })
  }

  onSubmit(): void {
    if (this.credencialForm.valid) {
      alert('Este form es valido');
      this.credencialForm.reset();
    } else {
      this.credencialForm.markAllAsTouched();
    }
    console.log(this.credencialForm);
  }

}
