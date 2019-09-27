import { Injectable } from '@angular/core';
import { Empresa } from '../../../models/empresas';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  public empresas: Empresa[] = [

    {
      id: 1,
      nombre: 'Empresa 1',
      ubicacion: 'Av.Loja',
      correo: 'empresa1@gmail.com',
      cuposDisponibles: 30,
      cuposOcupados: 10,
      fechaLimite: new Date()
    },

    {
      id: 2,
      nombre: 'Empresa 2',
      ubicacion: 'Av. de las Americas',
      correo: 'empresa2@gmail.com',
      cuposDisponibles: 50,
      cuposOcupados: 25,
      fechaLimite: new Date()
    },

    {
      id: 3,
      nombre: 'Empresa 3',
      ubicacion: 'Av. Don Bosco',
      correo: 'empresa3@gmail.com',
      cuposDisponibles: 20,
      cuposOcupados: 10,
      fechaLimite: new Date()
    },

    {
      id: 4,
      nombre: 'Empresa 4',
      ubicacion: 'Av. Primero de Mayo',
      correo: 'empresa4@gmail.com',
      cuposDisponibles: 45,
      cuposOcupados: 15,
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
