import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Tarea } from '../models/tarea.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as fromTareas from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() tarea: Tarea;
  @ViewChild('txtInputFisico', { static: false }) txtInputFisico: ElementRef;

  checkField: FormControl;
  txtInput: FormControl;

  editando: boolean;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.checkField = new FormControl(this.tarea.completado);
    this.txtInput = new FormControl(this.tarea.texto, Validators.required);

    this.checkField.valueChanges.subscribe(() => {
      const accion = new fromTareas.ToggleTareaAction(this.tarea.id);
      this.store.dispatch(accion);
    });
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;

    if (this.txtInput.invalid) return;
    if (this.txtInput.value === this.tarea.texto) return;

    const accion = new fromTareas.EditarTareaAction(this.tarea.id, this.txtInput.value);
    this.store.dispatch(accion);
  }

  borrarTarea() {
    const accion = new fromTareas.BorrarTareaAction(this.tarea.id);
    this.store.dispatch(accion);
  }
}
