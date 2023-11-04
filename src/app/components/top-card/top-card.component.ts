import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.scss']
})
export class TopCardComponent {

  @Input() headerTitle!:string;
  @Input() subHeader!:string;
  @Input() cardValue!:number;
}
