import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/modules/login/services/login.service';
import { UserWeb } from 'src/app/models/UserWeb';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

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

  async ngOnInit() {
    
  }

  btnCerrarSesion(){
    this.LoginSrv.LogOut()
    this.router.navigate(['login'])
  }

}
