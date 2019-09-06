import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  rutas = [
    {
      name: 'Inicio',
      path: '/inicio'
    },
    {
      name: 'Registrarse',
      path: '/regis'
    },
    {
      name: 'Documentos',
      path: '/docs'
    },
    {
      name: 'Solicitudes',
      path: '/solicitudes'
    }
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
