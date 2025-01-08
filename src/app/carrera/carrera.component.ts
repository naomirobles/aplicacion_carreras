import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Carrera } from './model/carrera';

@Component({
  selector: 'app-carrera',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carrera.component.html',
  styleUrl: './carrera.component.css'
})
export class CarreraComponent {
  titulo: string = 'Listado de Carreras';
  searchTerm: string = '';
  carreraSeleccionada: Carrera | null = null;
  modoCreacion: boolean = false;

  lasCarreras: Carrera[] = [
    {
      id: 1,
      nombreCarrera: 'IIA',
      descripcionCarrera: 'Ingeniería en Inteligencia Artificial',
      duracionCarrera: 8,
    },
    {
      id: 2,
      nombreCarrera: 'LCD',
      descripcionCarrera: 'Licenciatura en Ciencia de Datos',
      duracionCarrera: 12,
    },
    {
      id: 3,
      nombreCarrera: 'ISC',
      descripcionCarrera: 'Ingeniería en Sistemas Computacionales',
      duracionCarrera: 8,
    }
  ];

  get filteredCarreras(): Carrera[] {
    if (!this.searchTerm) {
      return this.lasCarreras;
    }
    return this.lasCarreras.filter(carrera =>
      carrera.nombreCarrera.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      carrera.descripcionCarrera.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  buscarRegistro(): void {
    console.log('Buscando registros con término:', this.searchTerm);
  }
  
  actualizarRegistro(carrera: Carrera): void {
    this.modoCreacion = false;
    this.carreraSeleccionada = { ...carrera };
    console.log('Editar carrera:', this.carreraSeleccionada);
  }

  guardarCambios(): void {
    if (this.carreraSeleccionada) {
      if (this.modoCreacion) {
        // Generar nuevo ID (último ID + 1)
        const nuevoId = Math.max(...this.lasCarreras.map(c => c.id)) + 1;
        this.carreraSeleccionada.id = nuevoId;
        this.lasCarreras.push({ ...this.carreraSeleccionada });
        console.log('Nueva carrera creada:', this.carreraSeleccionada);
      } else {
        const index = this.lasCarreras.findIndex(c => c.id === this.carreraSeleccionada?.id);
        if (index > -1) {
          this.lasCarreras[index] = { ...this.carreraSeleccionada };
          console.log('Cambios guardados:', this.lasCarreras[index]);
        }
      }
      this.cancelarEdicion();
    }
  }
  
  cancelarEdicion(): void {
    this.carreraSeleccionada = null;
    this.modoCreacion = false;
    console.log('Edición cancelada');
  }

  eliminarRegistro(carrera: Carrera): void {
    if (confirm(`¿Estás seguro de eliminar la carrera ${carrera.nombreCarrera}?`)) {
      const index = this.lasCarreras.findIndex(c => c.id === carrera.id);
      if (index > -1) {
        this.lasCarreras.splice(index, 1);
        console.log('Carrera eliminada:', carrera);
      }
    }
  }

  crearNuevoRegistro(): void {
    this.modoCreacion = true;
    this.carreraSeleccionada = {
      id: 0,
      nombreCarrera: '',
      descripcionCarrera: '',
      duracionCarrera: 0
    };
  }
}