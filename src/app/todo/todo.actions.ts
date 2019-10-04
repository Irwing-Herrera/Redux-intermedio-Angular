import { Action } from "@ngrx/store";

export const AGREGAR_TAREA = '[TAREA] Agregar Tarea';
export const EDITAR_TAREA = '[TAREA] Editar Tarea';
export const BORRAR_TAREA = '[TAREA] Borrar Tarea';

export const LIMPLIAR_COMPLETADOS_TAREA = '[TAREA] Limpiar Completados Tarea';

export const TOGGLE_TAREA = '[TAREA] Toggle Tarea';
export const TOGGLE_ALL_TAREA = '[TAREA] Toggle All Tarea';

export class AgregarTareaAction implements Action {
    readonly type = AGREGAR_TAREA;
    constructor(public texto: string) { }
}

export class EditarTareaAction implements Action {
    readonly type = EDITAR_TAREA;
    constructor(public id: number,
        public texto: string) { }
}

export class BorrarTareaAction implements Action {
    readonly type = BORRAR_TAREA;
    constructor(public id: number) { }
}

export class LimpiarCompletadosAction implements Action {
    readonly type = LIMPLIAR_COMPLETADOS_TAREA;
};

export class ToggleTareaAction implements Action {
    readonly type = TOGGLE_TAREA;
    constructor(public id: number) { }
}

export class ToggleAllTareaAction implements Action {
    readonly type = TOGGLE_ALL_TAREA;
    constructor(public completado: boolean) { }
}

export type Acciones = AgregarTareaAction | 
                       EditarTareaAction | 
                       ToggleTareaAction | 
                       BorrarTareaAction | 
                       ToggleAllTareaAction |
                       LimpiarCompletadosAction;