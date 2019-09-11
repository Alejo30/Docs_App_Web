import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';



@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {


  rutas = [
    {
      name: 'Inicio',
      path: '/inicio'
    }
  ];
  constructor( public nav: NavbarService) {}

  ngOnInit() {

  }

  mostrar(){
    let direccion = window.location.pathname
    if (direccion = "/login") {
       alert ( " estamos en el login")
    }
  }

}
