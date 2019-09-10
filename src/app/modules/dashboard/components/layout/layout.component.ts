import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/modules/login/services/login.service';
import { UserWeb } from 'src/app/models/UserWeb';

@Component({
  selector: 'app-dashboard',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public user: UserWeb;

  constructor(

    private LoginSrv: LoginService
    
  ) { }

  async ngOnInit() {
    this.user = this.LoginSrv.getCurrentUser()
  }

}
