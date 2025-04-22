import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-btn',
    standalone: true,
    imports: [],
    templateUrl: './btn.component.html'
})
export class BtnComponent {

  @Input() typeBtn: 'button' | 'submit' | 'reset' = 'button';
  @Input() color: 'green' | 'blue' = 'blue';

  get colors(){
    return {
      'bg-green-700': true,
      'hover:bg-green-800': true,
      'focus:ring-green-300': true,
      'bg-blue-700': true,
      'hover:bg-blue-800': true,
      'focus:ring-blue-300': true,
    };
  }

}
