import { LayoutComponent } from './../../login/components/layout/layout.component';
import { Injectable } from '@angular/core';
import { LoginService } from '../../login/services/login.service';
import { UserWeb } from 'src/app/models/UserWeb';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  
  public usuario: UserWeb = {
    username: '',
    password: ''
  }

  public showNav: boolean = false;

  constructor(
    private LoginSrv: LoginService
  ) { }

  async mostrar(){
    const usuario = await this.LoginSrv.login(this.usuario.username, this.usuario.password);
    if (usuario) {
      this.showNav = true
    }
  }
}
