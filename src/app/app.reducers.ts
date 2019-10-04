import { Tarea } from './todo/models/tarea.model';
import { ActionReducerMap } from '@ngrx/store';

import { todoReduucer } from "./todo/todo.reducer";

import { filtroReducer } from './filter/filter.reducer';
import { filtroValidos } from './filter/filter.actions';

export interface AppState {
    tareas: Tarea[];
    filtro: filtroValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
    tareas: todoReduucer,
    filtro: filtroReducer
};