import { Component, OnInit } from '@angular/core';
import { UserWeb } from 'src/app/models/UserWeb';
import { LoginService } from 'src/app/modules/login/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
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
