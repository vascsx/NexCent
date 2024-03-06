import { Component } from '@angular/core';
import { BoxModule } from '../../modules/box/box.module';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [
    BoxModule
  ],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {

}
