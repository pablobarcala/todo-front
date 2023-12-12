import { Tarea } from "./Tarea";

export interface Lista {
    id: number,
    titulo: string,
    icono: string,
    tareas?: Tarea[]
}