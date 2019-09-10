import { Injectable } from '@angular/core';
import gql from "graphql-tag";
import { Apollo } from 'apollo-angular';
import { TryCatchStmt } from '@angular/compiler';
import { UserWeb } from '../../../models/UserWeb';

const LOGIN = gql`
query iniciarSesion($username: String!, $password: String!){
  login(username: $username, password: $password){
    username
    persona{
      id
      primerNombre
      segundoNombre
      primerApellido
      segundoApellido
    }
  }
}
`

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private apollo:Apollo
  ) { }

  public async login(username: string, password: string):Promise<UserWeb>{
    const query = await this.apollo.query(
      {
        query:LOGIN,
        variables:{
          username: username, //primera la variable de la consulta y segunda parametro
          password: password
        },
        fetchPolicy:'network-only'
      }
    )
    try {
      const resultado = await query.toPromise();  
      return resultado.data['login'] as UserWeb
    } catch (error) {
      //console.log("Usuario no encontrado");
      return null;
    }
    
    
  }

}
