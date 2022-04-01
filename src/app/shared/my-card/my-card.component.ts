import { ElementRef, Component, OnInit, Input, ViewChild } from '@angular/core';
import { MembroModel } from 'src/app/modules/membro/models/membroModel';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss']
})
export class MyCardComponent implements OnInit {

  @Input() titulo!:string;
  @Input() coordenador!: MembroModel;
  @Input() prazo!: string;
  @Input() objetivo!: string;

  @ViewChild('card', {static: true}) card!:ElementRef;
  @ViewChild('flip', {static: true}) flip!:ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log(this.coordenador);
  }


  mudaCard(){
    this.flip.nativeElement.classList.toggle('flipper-active');
  }


}
