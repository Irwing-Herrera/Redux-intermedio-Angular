import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.reducers';
import { ToggleAllTareaAction } from './todo.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completado: boolean = false;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  toggleAll() {
    this.completado = !this.completado;
    const accion = new ToggleAllTareaAction(this.completado);
    this.store.dispatch(accion);
  }
}
