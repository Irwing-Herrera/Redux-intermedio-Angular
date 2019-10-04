import { Pipe, PipeTransform } from '@angular/core';
import { Tarea } from '../todo/models/tarea.model';
import * as fromFIltro from '../filter/filter.actions';

@Pipe({
  name: 'filterTarea'
})
export class FilterPipe implements PipeTransform {

  transform(tareas: Tarea[], filtro: fromFIltro.filtroValidos): Tarea[] {

    switch (filtro) {
      case 'completados':
        return tareas.filter(tarea => tarea.completado);
      case 'pendientes':
        return tareas.filter(tarea => !tarea.completado);
      default:
        return tareas;
    }
  }

}
