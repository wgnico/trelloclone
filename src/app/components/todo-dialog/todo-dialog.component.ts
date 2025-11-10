import { Component, Inject } from '@angular/core';
import {DIALOG_DATA, DialogModule,DialogRef} from '@angular/cdk/dialog';
import { faBars, faCheckToSlot, faClose, faTag, faUser,faCheckSquare,faClock, faAslInterpreting } from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from '../btn/btn.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToDo } from '../../models/todo,models';


interface InputData{
  todo: ToDo;
}
interface OutputData{
  rta: boolean;
}

@Component({
  selector: 'app-todo-dialog',
  imports: [DialogModule,BtnComponent,FontAwesomeModule],
  templateUrl: './todo-dialog.component.html',
})
export class TodoDialogComponent {

  todo:ToDo;
  
  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) data: InputData
  ){
    this.todo = data.todo;
  }

  faBars = faBars;
  faCheckToSlot = faCheckToSlot;
  faClose = faClose;
  faUser= faUser;
  faTag= faTag;
  faCheckSquare= faCheckSquare;
  faClock= faClock;


  
  close(){
    this.dialogRef.close({
      rta: true,
    });
  }

  closeWithRta(rta: boolean){
    this.dialogRef.close({rta})
  }
}
