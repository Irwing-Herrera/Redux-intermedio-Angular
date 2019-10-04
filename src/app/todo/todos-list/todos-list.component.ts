import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Tarea } from '../models/tarea.model';
import * as fromFiltro from '../../filter/filter.actions';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  tareas: Tarea[] = [];
  filtro: fromFiltro.filtroValidos;

  constructor(
    private store:Store<AppState>,
    
  ) { }
  
  ngOnInit() {
    this.store.subscribe(state => {
      this.tareas = state.tareas;
      this.filtro = state.filtro;
    });
  }
}
