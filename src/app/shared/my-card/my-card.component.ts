import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss']
})
export class MyCardComponent implements OnInit {

  @Input() titulo!:string;
  @Input() sub_titulo!:string;
  @Input() descricao!: string;

  constructor() { }

  ngOnInit(): void {
  }



}
