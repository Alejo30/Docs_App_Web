import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { LoginService } from '../../../login/services/login.service';
import { UserWeb } from '../../../../models/UserWeb';



@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  public user: UserWeb;

  rutas = [
    {
      name: 'Inicio',
      path: '/inicio'
    }
  ];
  constructor(
    public nav: NavbarService,
    private LoginSrv: LoginService
  ) { }

  ngOnInit() {
    this.user = this.LoginSrv.getCurrentUser()
  }

  mostrar() {
    let direccion = window.location.pathname
    if (direccion = "/login") {
      alert(" estamos en el login")
    }
  }

}
