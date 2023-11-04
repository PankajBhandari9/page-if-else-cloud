import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-all-cards',
  templateUrl: './all-cards.component.html',
  styleUrls: ['./all-cards.component.scss']
})
export class AllCardsComponent implements OnInit{

  constructor(){}

  @Input() cardsList!:any[];

  ngOnInit(): void {
  }

  getCardSign(i:number){
    switch(i){
      case 1:
        return "fa-solid fa-music"
      case 2:
        return "fa-solid fa-chart-pie";
      case 3:
        return "fa-solid fa-download";
      default:
        return "fa-solid fa-arrows-rotate";
    }
  }

}
