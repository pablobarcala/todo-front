import { Tarea } from "./Tarea";
import { LISTAS } from "./mock-listas";

export const TAREAS: Tarea[] = [
    {
        id: 0,
        titulo: "Tarea 1",
        completada: false,
        favorita: false,
        nota: "",
        creacion: new Date(),
        vencimiento: "2023-12-18",
        listas: [LISTAS[0]]
    },
    {
        id: 1,
        titulo: "Tarea 2",
        completada: true,
        favorita: false,
        nota: "",
        creacion: new Date("11/06/2023"),
        vencimiento: "",
        listas: [LISTAS[0]]
    },
    {
        id: 2,
        titulo: "Tarea 3",
        completada: false,
        favorita: true,
        nota: "",
        creacion: new Date("12/19/2023"),
        vencimiento: "2023-12-20",
        listas: [LISTAS[0]]
    },
    {
        id: 3,
        titulo: "Tarea 4",
        completada: false,
        favorita: false,
        nota: "",
        creacion: new Date("11/09/2023"),
        vencimiento: "2023-12-17",
        listas: [LISTAS[0]]
    },
    {
        id: 4,
        titulo: "Tarea 5",
        completada: false,
        favorita: true,
        nota: "",
        creacion: new Date(),
        vencimiento: "",
        listas: [LISTAS[0]]
    },
    {
        id: 5,
        titulo: "Tarea 6",
        completada: false,
        favorita: true,
        nota: "",
        creacion: new Date(),
        vencimiento: "",
        listas: [LISTAS[0]]
    }
]