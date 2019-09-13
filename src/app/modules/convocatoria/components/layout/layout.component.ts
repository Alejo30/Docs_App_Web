import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public form = {
    carrera: 'SELECCIONE UNA CARRERA'
  }

  constructor() { }

  ngOnInit() {
  }

  btnGenerar() {
    console.log(this.form);
  }

}
