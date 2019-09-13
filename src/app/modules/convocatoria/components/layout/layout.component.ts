import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/modules/login/services/login.service';
import { UserWeb } from 'src/app/models/UserWeb';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  /*
  ESTE ES EL OBJETO QUE INTERACTUA CON EL FORMULARIO,
  AQUI SE DECLARA LAS PROPIEDADES DEL FORMULARIO QUE SE ALMACENAN EN LAS VARIABLES
  */
  public form = {
    carrera: 'SELECCIONE UNA CARRERA',
    empresa: '',
    curso: '',
    materia:'',
    fechaActual:'',
    fechaLimite:'',
  }

  public user: UserWeb;
  showNav = true;
  constructor(

    private LoginSrv: LoginService,
    private router:Router,
  
    
  ) { 
    this.user = this.LoginSrv.getCurrentUser()

    if (this.user == null) {
      this.router.navigate(['login'])
    }

  }

  ngOnInit() {
  }

  btnGenerar() {
    console.log(this.form);
  }

  btnCerrarSesion(){
    this.LoginSrv.LogOut()
    this.router.navigate(['login'])
  }


}
