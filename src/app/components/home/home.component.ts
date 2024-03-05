import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ButtonComponent } from '../button/button.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
      HeaderComponent,
      ButtonComponent
    ]
})
export class HomeComponent {

}
