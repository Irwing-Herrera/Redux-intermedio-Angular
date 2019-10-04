import { Component, OnInit } from '@angular/core';
import * as fromFiltro from "../../filter/filter.actions";
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Tarea } from '../models/tarea.model';
import { LimpiarCompletadosAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: fromFiltro.filtroValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: fromFiltro.filtroValidos;
  pendientes: number;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.contarPendientes(state.tareas);
    });
  }

  changeFiltro(nuevoFiltro: fromFiltro.filtroValidos) {
    const accion = new fromFiltro.SetFiltroAction(nuevoFiltro);
    this.store.dispatch(accion);
  }

  contarPendientes(tareas: Tarea[]) {
    this.pendientes = tareas.filter(tarea => !tarea.completado).length;
  }

  limplarCompletadas() {
    const accion = new LimpiarCompletadosAction();
    this.store.dispatch(accion);
  }
}
