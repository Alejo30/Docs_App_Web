import { Injectable } from '@angular/core';
import gql from "graphql-tag";
import { Apollo } from 'apollo-angular';
import { TryCatchStmt } from '@angular/compiler';
import { UserWeb } from '../../../models/UserWeb';

const LOGIN = gql`
query iniciarSesion($username: String!, $password: String!) {
  appPersonas {
    login(username: $username, password: $password) {
      username
      roles
      persona {
        id
        primerNombre
        segundoNombre
        primerApellido
        segundoApellido
        Foto
      }
    }
  }
}
`

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private apollo: Apollo
  ) { }

  public async login(username: string, password: string): Promise<UserWeb> {
    console.log("object");
    const query = await this.apollo.query(
      {
        query: LOGIN,
        variables: {
          username: username, //primera la variable de la consulta y segunda parametro
          password: password
        },
        fetchPolicy: 'network-only'
      }
    )
    console.log(await query.toPromise());
    try {
      const resultado = await query.toPromise();
      console.log(resultado.data);
      const user = resultado.data['appPersonas']['login'] as UserWeb
      this.Login(user)
      return user;
    } catch (error) {
      //console.log("Usuario no encontrado");
      return null;
    }

  }
  private Login(user: UserWeb) {
    if (user != null) {
      localStorage.setItem('currentUser', JSON.stringify(user))
    }
  }

  public LogOut() {
    localStorage.setItem('currentUser', null);
  }

  public getCurrentUser() {
    const user: UserWeb = JSON.parse(localStorage.getItem('currentUser'))
    return user;
  }



  public hasRole(rolName: string) {

    const user = this.getCurrentUser()
    if (user.roles.filter(item => item === rolName.toUpperCase())[0]) {
      return true
    }
    return false

  }

}
