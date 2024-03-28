import {
  Component,
  HostListener,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-slider-event',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './slider-event.component.html',
  styleUrl: './slider-event.component.css',

})
export class SliderEventComponent {
  @Input() cards: any[] = [
    {
      id: 1,
      evento: true,
      typeMembro: 'Ja acontedeu',
      Title: '1Can coffee make you a better developer?',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      imgPath: '../../../assets/encontro.jpeg',
      imgAutor: '../../../assets/doke.png',
      link: 'https://github.com/',
      nomes: 'Samuelson',
      datas: 'Aug 18',
    },
    {
      id: 2,
      evento: true,
      typeMembro: 'Ja aconteceu',
      Title: '2Can coffee make you a better developer?',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      imgPath: '../../../assets/encontro2.jpeg',
      imgAutor: '../../../assets/doke.png',
      nomes: 'Samuelson',
      datas: 'Aug 18',
    },
    {
      id: 3,
      evento: false,
      typeMembro: 'Vai acontecer',
      Title: '3Can coffee make you a better developer?',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      imgPath: '../../../assets/event-java.jpeg',
      imgAutor: '../../../assets/doke.png',
      nomes: 'Samuelson',
      datas: 'Aug 18',
    },
    {
      id: 4,
      evento: false,
      typeMembro: 'Vai acontecer',
      Title: '4Can coffee make you a better developer?',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      imgPath: '../../../assets/linux.jpeg',
      imgAutor: '../../../assets/doke.png',
      nomes: 'Samuelson',
      datas: 'Aug 18',
    },
  ]; // Array of card data objects
  @Output() navigate = new EventEmitter<string>(); // Event to emit navigation direction

  currentIndex = 0; // Index of the currently displayed card

  onNavigate(direction: string) {
    if (direction === 'next' && this.currentIndex < this.cards.length - 1) {
      this.currentIndex += 2;
    } else if (direction === 'prev' && this.currentIndex > 0) {
      this.currentIndex -= 2;
    }
    this.navigate.emit(direction);
  }
}
