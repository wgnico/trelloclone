import { Component } from '@angular/core';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ToDo } from '../../models/todo,models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  imports: [DragDropModule, NavbarComponent, CommonModule],
  templateUrl: './board.component.html',
  styles: [
    `
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
    `
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class BoardComponent {
  todos: ToDo[] = [
    {
      id: '1',
      title: 'task 1',
    },
    {
      id: '2',
      title: 'task 2',
    },
    {
      id: '3',
      title: 'task 3',
    },
  ];

  drop(event: CdkDragDrop<any[]>) {
    console.log(event);
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }
}
