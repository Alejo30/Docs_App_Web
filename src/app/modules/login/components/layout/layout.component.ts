import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Subscription } from 'rxjs';
import { UserWeb } from 'src/app/models/UserWeb';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/modules/navbar/services/navbar.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{
  
  public showNav: boolean = false;

  public usuario: UserWeb = {
    username: '',
    password: ''
  }

  public showMessage: boolean = false;

  constructor(
    private LoginSrv: LoginService,
    private router:Router,
   
  ) { }

  async ngOnInit() {
  
  }

    async btnIngresar(){
    const usuario = await this.LoginSrv.login(this.usuario.username, this.usuario.password);
    if(usuario!= null){
      this.router.navigate(['dashboard'])
      this.showNav  = true
    }else{
      this.showMessage = true
     
    }
  }

}
