import * as fromTarea from './todo.actions';
import { Tarea } from './models/tarea.model';

const tarea_1 = new Tarea('Vencer a Thanos');
const tarea_2 = new Tarea('Salvar a Jose Jose');
tarea_2.completado = true;

const estadoInicial: Tarea[] = [tarea_1, tarea_2];

export function todoReduucer(state = estadoInicial,
    action: fromTarea.Acciones): Tarea[] {

    switch (action.type) {

        case fromTarea.AGREGAR_TAREA:
            const tarea = new Tarea(action.texto);
            //...state => clonar el estado actual / nuevo arreglo
            return [...state, tarea];

        case fromTarea.EDITAR_TAREA:
            return state.map(tareaEditar => {
                if (tareaEditar.id === action.id) {
                    return {
                        ...tareaEditar,
                        texto: action.texto
                    };
                } else {
                    return tareaEditar;
                }
            });

        case fromTarea.BORRAR_TAREA:
            return state.filter(tareaEliminar => tareaEliminar.id !== action.id);

        case fromTarea.LIMPLIAR_COMPLETADOS_TAREA:
            return state.filter(tareaCompletadas => !tareaCompletadas.completado);

        case fromTarea.TOGGLE_TAREA:
            return state.map(tareaEditar => {
                if (tareaEditar.id === action.id) {
                    return {
                        ...tareaEditar,
                        completado: !tareaEditar.completado
                    };
                } else {
                    return tareaEditar;
                } 
            });

        case fromTarea.TOGGLE_ALL_TAREA:
            return state.map(tareaEdit => {
                return {
                    ...tareaEdit,
                    completado: action.completado
                };
            });

        default:
            return state;
    }

}