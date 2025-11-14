import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-btn',
    standalone: true,
    imports: [NgClass],
    templateUrl: './btn.component.html'
})
export class BtnComponent {

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color: 'success' | 'primary' | 'danger' | 'light' | 'sky' = 'primary';

    mapColors = {
    success: {
      'bg-green-700': true,
      'hover:bg-green-800': true,
      'focus:ring-green-300': true,
      'text-white': true
    },
    primary: {
      'bg-blue-700': true,
      'hover:bg-blue-800': true,
      'focus:ring-blue-300': true,
      'text-white': true
    },
    danger: {
      'bg-red-700': true,
      'hover:bg-red-800': true,
      'focus:ring-red-300': true,
      'text-white': true
    },
    sky: {
      'bg-sky-700': true,
      'hover:bg-sky-800': true,
      'focus:ring-sky-300': true,
      'text-white': true
    },
    light: {
      'bg-gray-200': true,
      'hover:bg-gray-500': true,
      'focus:ring-gray-50': true,
      'text-gray-700': true
    }
  }

  get colors(){
      const colors = this.mapColors[this.color];
      if (colors) {
        return colors;
      }
      return {};
  }

}
