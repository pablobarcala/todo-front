import { Lista } from "./Lista";
import { Paso } from "./Paso";

export interface Tarea {
    id: number,
    titulo: string,
    completada: boolean,
    favorita: boolean,
    nota: string,
    pasos?: Paso[],
    creacion?: Date,
    vencimiento?: string,
    listas: Lista[]
}