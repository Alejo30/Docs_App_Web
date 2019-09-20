import { Error } from './Error';
export interface Convocatoria extends Error {
    id?: number
    idDocente?: number
    fechaInicio?: Date
    fechaFin?: Date
    idEmpresa?: number
}    