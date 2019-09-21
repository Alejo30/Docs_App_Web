import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { LoginService } from '../../../login/services/login.service';
import { UserWeb } from '../../../../models/UserWeb';
import { Router } from '@angular/router';



@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  public user: UserWeb;

  public showNav: boolean = false;
  rutas = [
    {
      name: 'Inicio',
      path: '/inicio'
    }
  ];
  constructor(
    public nav: NavbarService,
    private LoginSrv: LoginService,
    private router:Router
  ) { }

  ngOnInit() {
    this.user = this.LoginSrv.getCurrentUser()
  }


}
