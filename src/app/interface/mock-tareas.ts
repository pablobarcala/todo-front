import { Tarea } from "./Tarea";
import { LISTAS } from "./mock-listas";

export const TAREAS: Tarea[] = [
    {
        id: 0,
        titulo: "Tarea 1",
        completada: false,
        favorita: false,
        nota: "",
        listas: [LISTAS[1]]
    },
    {
        id: 1,
        titulo: "Tarea 2",
        completada: true,
        favorita: false,
        nota: "",
        listas: [LISTAS[1]]
    },
    {
        id: 2,
        titulo: "Tarea 3",
        completada: false,
        favorita: true,
        nota: "",
        listas: [LISTAS[1]]
    },
    {
        id: 3,
        titulo: "Tarea 4",
        completada: false,
        favorita: false,
        nota: "",
        listas: [LISTAS[1]]
    },
    {
        id: 4,
        titulo: "Tarea 5",
        completada: false,
        favorita: true,
        nota: "",
        listas: [LISTAS[1]]
    },
    {
        id: 5,
        titulo: "Tarea 6",
        completada: false,
        favorita: true,
        nota: "",
        listas: [LISTAS[1]]
    }
]