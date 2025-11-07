import { Component } from '@angular/core';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Column, ToDo } from '../../models/todo,models';
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

  columns: Column[] = [
    {
      title: 'ToDo',
      todos: [
        {
          id: '1',
          title: 'make dishes'
        },
        {
          id: '2',
          title: 'Buy a unicorn'
        }
      ],      
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '3',
          title: 'watch Angular path in Platzi'
        },
        {
          id: '4',
          title: 'play guitar'
        }
      ]
    },{
      title: 'done',
      todos: [
        {
          id: '5',
          title: 'task 10'
        }
      ]
    }
    
  ]

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

  doing: ToDo[] = [
    {
      id: '4',
      title: 'watch Angular path in Platzi'
    }
  ];
  
  done: ToDo[] = [
    {
      id: '5',
      title: 'play guitar'
    }
  ];

  addColumn(){
    this.columns.push({
      title: 'New Column',
      todos: []
    })
  }

  drop(event: CdkDragDrop<ToDo[]>) {
    if(event.previousContainer === event.container){
      moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
    }else{
      transferArrayItem(event.previousContainer.data, event.container.data,event.previousIndex,event.currentIndex)
    }

    
  }
}
