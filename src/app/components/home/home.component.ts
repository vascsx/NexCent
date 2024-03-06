import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ButtonComponent } from '../button/button.component';
import { SobreComponent } from '../sobre/sobre.component';
import { BoxComponent } from '../box/box.component';
import { BoxModule } from '../../modules/box/box.module';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
      HeaderComponent,
      ButtonComponent,
      SobreComponent,]
})
export class HomeComponent {

}
