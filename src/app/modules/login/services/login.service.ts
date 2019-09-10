import { Injectable } from '@angular/core';
import gql from "graphql-tag";

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

  constructor() { }
}
