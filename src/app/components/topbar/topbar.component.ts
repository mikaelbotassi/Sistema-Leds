import { Component, OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  ativo: boolean = false;
  @ViewChild ('nav', {static: true}) myNav!: ElementRef;
  @ViewChild ('logoImg', {static: true}) logoImg!: ElementRef;
  @ViewChild ('logoTxt', {static: true}) logoTxt!: ElementRef;
  @ViewChild ('listNav', {static: true}) listNav!: ElementRef;

  constructor() {
   }

  ngOnInit(): void {
  }

  @HostListener('window:scroll') onWindowScroll() {
    if ((window.scrollY > 1.5)){
      this.ativo = !this.ativo;
      console.log(this.ativo);
      this.myNav.nativeElement.style.backgroundColor = 'white';
      this.logoImg.nativeElement.style.visibility = 'hidden';
      this.logoTxt.nativeElement.style.color = '#212121';
      this.listNav.nativeElement.classList.add('topbar-list-react');
    } else {
      this.myNav.nativeElement.style.backgroundColor = 'transparent';
      this.logoImg.nativeElement.style.visibility = 'visible';
      this.logoTxt.nativeElement.style.color = 'white';
      this.listNav.nativeElement.classList.remove('topbar-list-react');
    }
  }

  // @HostListener('window:scroll') onWindowScroll() {
  //   if ((window.scrollY > 1.5) || (window.O)){
  //     this.myNav.nativeElement.classList.toggle('');
  //   } else {
  //     this.myNav.nativeElement.style.backgroundColor = 'transparent';
  //     this.logoImg.nativeElement.style.visibility = 'visible';
  //   }
  // }

}
