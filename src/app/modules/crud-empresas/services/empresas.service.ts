import { Injectable } from '@angular/core';
import { Empresa } from '../../../models/empresas';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  public empresas: Empresa[] = [

    {
      id: 1,
      codigo: '01338755111',
      nombre: 'Empresa 1',
      ruc: '01338755111',
      direccion: 'Av.Loja',
      telefono: '4578961',
      celular: '0965478235',
      contacto: 'Santiago',
      cargo: 'Ingeniero',
      representanteLegal: 'Gustavo',
      razonSocial: 'Supermaxi',
      cuposDisponibles: 30,
      cuposOcupados: 10,
      fechaLimite: new Date()
    },

    {
      id: 2,
      codigo: '01338755111',
      nombre: 'Empresa 2',
      ruc: '01338755111',
      direccion: 'Av.Loja',
      telefono: '4578961',
      celular: '0965478235',
      contacto: 'Santiago',
      cargo: 'Ingeniero',
      representanteLegal: 'Gustavo',
      razonSocial: 'Supermaxi',
      cuposDisponibles: 30,
      cuposOcupados: 10,
      fechaLimite: new Date()
    },

    {
      id: 3,
      codigo: '01338755111',
      nombre: 'Empresa 3',
      ruc: '01338755111',
      direccion: 'Av.Loja',
      telefono: '4578961',
      celular: '0965478235',
      contacto: 'Santiago',
      cargo: 'Ingeniero',
      representanteLegal: 'Gustavo',
      razonSocial: 'Supermaxi',
      cuposDisponibles: 30,
      cuposOcupados: 10,
      fechaLimite: new Date()
    },

    {
      id: 4,
      codigo: '01338755111',
      nombre: 'Empresa 4',
      ruc: '01338755111',
      direccion: 'Av.Loja',
      telefono: '4578961',
      celular: '0965478235',
      contacto: 'Santiago',
      cargo: 'Ingeniero',
      representanteLegal: 'Gustavo',
      razonSocial: 'Supermaxi',
      cuposDisponibles: 30,
      cuposOcupados: 10,
      fechaLimite: new Date()
    },

  ]




  constructor() { }


  public async getEmpresas() {
    return await this.empresas
  }


  public async addEmpresa(empresa: Empresa) {
    this.empresas.push(empresa)
  }

  public async editEmpresa(pk: number, empresa: Empresa) {
    this.empresas.filter(item => item.id == pk)[0] = empresa
  }

  public async deleteEmpresa(empresa: Empresa) {
    const index = this.empresas.indexOf(empresa)

    this.empresas.splice(index, 1);
  }

  public async getEmpresaById(pk: number) {
    return this.empresas.filter(item => item.id == pk)[0]
  }


}
