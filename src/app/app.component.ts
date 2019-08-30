import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido a Secretos Peluqueria';
  empresa:string = "ClicXSystem";
  autor:string = "Alejandro Coraizaca";
}
