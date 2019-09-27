import { Component, OnInit } from '@angular/core';
import { EmpresasService } from './services/empresas.service';
import { Empresa } from 'src/app/models/empresas';

@Component({
  selector: 'app-crud-empresas',
  templateUrl: './crud-empresas.component.html',
  styleUrls: ['./crud-empresas.component.css']
})
export class CrudEmpresasComponent implements OnInit {


  public empresas: Empresa[]

  constructor(
    private srv: EmpresasService
  ) { }

  async ngOnInit() {

    this.empresas = await this.srv.getEmpresas()

  }


  public async btnEliminar(empresa: Empresa) {
    await this.srv.deleteEmpresa(empresa)
  }

}
