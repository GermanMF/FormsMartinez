import { Component } from '@angular/core';
import { Alumno } from 'src/app/models';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
})
export class AlumnosComponent {
  public alumnos: Alumno[] = [
    new Alumno(1, 'Juan', 'Perez', 5, 5, 5, 10),
    new Alumno(2, 'Benito', 'Palurdo', 6, 7, 9, 5),
    new Alumno(3, 'Constantino', 'Gomez', 10, 10, 9, 10),
    new Alumno(4, 'Querubinosa', 'Rodriguez', 6, 5, 6, 6),
    new Alumno(5, 'Alibaba', 'Zamudio', 9, 10, 5, 8),
    new Alumno(6, 'Golondrino', 'Amaterasu', 7, 9, 5, 6),
    new Alumno(7, 'Valentin', 'Elizalde', 10, 10, 10, 10),
    new Alumno(8, 'Cuauhtemoc', 'Valdivia', 6, 6, 5, 5),
    new Alumno(9, 'Juan', 'Guarnizo', 6, 8, 5, 9),
    new Alumno(10, 'Sardino', 'Quezada', 10, 8, 9, 8),
  ];



  getAlumno(alumnoId: number): Alumno{
    return this.alumnos.find(alumno => alumno.id == alumnoId)!
  }

  getTotal(alumnoId: number): number {
    const alumno = this.getAlumno(alumnoId);
    return (alumno.espanol  + alumno.matematicas + alumno.cienciasNaturales + alumno.civismo) / 4 
  }
}