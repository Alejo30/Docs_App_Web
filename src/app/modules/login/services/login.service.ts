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
      Foto
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
      const user = resultado.data['login'] as UserWeb
      this.Login(user) 
      return user;
    } catch (error) {
      //console.log("Usuario no encontrado");
      return null;
    }
    
  }

  private Login(user: UserWeb){
    if(user != null){
      localStorage.setItem('currentUser', JSON.stringify(user))
    }
  }

  public LogOut(){
    localStorage.setItem('currentUser',null);
  }

  public getCurrentUser(){
    const user: UserWeb = JSON.parse(localStorage.getItem('currentUser'))

    return user;
  }

}
