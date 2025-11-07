import { Component } from '@angular/core';
import {DialogModule,DialogRef} from '@angular/cdk/dialog';
import { faBars, faCheckToSlot, faClose, faTag, faUser,faCheckSquare,faClock } from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from '../btn/btn.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-todo-dialog',
  imports: [DialogModule,BtnComponent,FontAwesomeModule],
  templateUrl: './todo-dialog.component.html',
})
export class TodoDialogComponent {
  
  constructor(
    private dialogfeg: DialogRef
  ){}

  faBars = faBars;
  faCheckToSlot = faCheckToSlot;
  faClose = faClose;
  faUser= faUser;
  faTag= faTag;
  faCheckSquare= faCheckSquare;
  faClock= faClock;


  
  close(){
    this.dialogfeg.close();
  }
}
