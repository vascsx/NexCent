import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent {

  @Input() imageSrc!: string;
  @Input() altText!: string;
  @Input() title!: string;
  @Input() description!: string;
}
