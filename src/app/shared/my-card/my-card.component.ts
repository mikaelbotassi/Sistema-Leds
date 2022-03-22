import { ElementRef, Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss']
})
export class MyCardComponent implements OnInit {

  @Input() titulo!:string;
  @Input() sub_titulo!:string;
  @Input() descricao!: string;

  @ViewChild('card', {static: true}) card!:ElementRef;
  @ViewChild('flip', {static: true}) flip!:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }


  mudaCard(){
    this.flip.nativeElement.classList.toggle('flipper-active');
  }


}
