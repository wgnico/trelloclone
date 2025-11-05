import { Component } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';


@Component({
    selector: 'app-navbar',
    imports: [BtnComponent,],
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isOpen = false;
}
