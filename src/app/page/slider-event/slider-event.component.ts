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
      typeMembro: 'Members only',
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
      typeMembro: 'Members only',
      Title: '2Can coffee make you a better developer?',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      imgPath: '../../../assets/encontro2.jpeg',
        imgAutor: '../../../assets/doke.png',
      nomes: 'Samuelson',
      datas: 'Aug 18',
    },
    {
      id: 3,
      typeMembro: 'Members only',
      Title: '3Can coffee make you a better developer?',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      imgPath: '../../../assets/event-java.jpeg',
        imgAutor: '../../../assets/doke.png',
      nomes: 'Samuelson',
      datas: 'Aug 18',
    },
    {
      id:4,
      typeMembro: 'Members only',
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
      this.currentIndex++;
    } else if (direction === 'prev' && this.currentIndex > 0) {
      this.currentIndex--;
    }
    this.navigate.emit(direction);
  }

  arr: any[] = [
    { id: 1, name: 'uno' },
    { id: 2, name: 'uno' },
    { id: 3, name: 'uno' },
    { id: 4, name: 'uno' },
    { id: 5, name: 'uno' },
    { id: 6, name: 'uno' },
    { id: 7, name: 'uno' },
    { id: 8, name: 'uno' },
    { id: 9, name: 'uno' },
    { id: 10, name: 'uno' },
  ];
  totalCards: number = this.arr.length;
  currentPage: number = 1;
  pagePosition: string = '0%';
  cardsPerPage!: number;
  totalPages!: number;
  overflowWidth!: string;
  cardWidth!: string;
  containerWidth!: number;
  @ViewChild('container', { static: true, read: ElementRef })
  container!: ElementRef;
  @HostListener('window:resize') windowResize() {
    let newCardsPerPage = this.getCardsPerPage();
    if (newCardsPerPage != this.cardsPerPage) {
      this.cardsPerPage = newCardsPerPage;
      this.initializeSlider();
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
        this.populatePagePosition();
      }
    }
  }

  ngOnInit() {
    this.cardsPerPage = 2; //this.getCardsPerPage();
    this.initializeSlider();
  }

  initializeSlider() {
    this.totalPages = Math.ceil(this.totalCards / this.cardsPerPage);
    this.overflowWidth = `calc(${this.totalPages * 100}% + ${
      (this.totalPages - 1) * 20
    }px)`; // Adjust for spacing between pages
    this.cardWidth = `calc(calc(50% - ${10 * this.cardsPerPage}px) / ${
      this.cardsPerPage
    })`;
  }

  // initializeSlider() {
  //   this.totalPages = Math.ceil(this.totalCards / this.cardsPerPage);
  //   this.overflowWidth = `calc(${this.totalPages * 100}% + ${
  //     this.totalPages * 10
  //   }px)`;
  //   this.cardWidth = `calc((${100 / this.totalPages}% - ${
  //     this.cardsPerPage * 10
  //   }px) / ${this.cardsPerPage})`;
  // }

  getCardsPerPage() {
    return Math.floor(this.container.nativeElement.offsetWidth / 200);
  }

  changePage(incrementor: number) {
    this.currentPage += incrementor;
    this.populatePagePosition();
  }

  populatePagePosition() {
    this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% - ${
      10 * (this.currentPage - 1)
    }px)`;
  }
}
