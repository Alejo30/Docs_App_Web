import { Persona } from './Persona';
import { Error } from './Error';


export interface UserWeb extends Error {
    username?: string
    password?: string
    persona?: Persona
}