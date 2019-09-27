import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../../../models/empresas';
import { EmpresasService } from '../../services/empresas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  styleUrls: ['./empresa-form.component.css']
})
export class EmpresaFormComponent implements OnInit {


  public empresa: Empresa = {
    cuposDisponibles: 0,
    cuposOcupados: 0
  }

  public pk: number;

  constructor(
    private srv: EmpresasService,
    private router: Router,//sirve para navegar entre paginas desde el controlador
    private route: ActivatedRoute//sirve para tomar los parametros del link
  ) { }

  async ngOnInit() {

    this.pk = this.route.snapshot.params['pk']
    if (this.pk) {
      this.empresa = await this.srv.getEmpresaById(this.pk)
    }

  }


  async btnGuardar() {
    if (this.pk) {
      await this.srv.editEmpresa(this.pk, this.empresa)
    } else {
      await this.srv.addEmpresa(this.empresa)
    }
    this.router.navigate(['empresas'])
  }


}
