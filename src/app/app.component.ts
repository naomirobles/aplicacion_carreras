import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarreraComponent } from './carrera/carrera.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CarreraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Mi primer proyecto angular xd';
  nombre = 'Yo';
}
