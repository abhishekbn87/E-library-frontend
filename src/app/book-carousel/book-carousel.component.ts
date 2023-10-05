import { Component } from '@angular/core';

@Component({
  selector: 'app-book-carousel',
  templateUrl: './book-carousel.component.html',
  styleUrls: ['./book-carousel.component.css'],
})
export class BookCarouselComponent {
  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  constructor() {}

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/jkr.jpg',
      title:
        "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
      subtitle: 'Dr.Seuss',
    };
    this.slides[1] = {
      src: './assets/stephen-king.jpg',
      title: 'Books are a uniquely portable magic',
      subtitle: 'Stephen King',
    };
    this.slides[2] = {
      src: './assets/danbrown.jpg',
      title:
        "Books are the perfect entertainment: no commercials, no batteries, hours of enjoyment for each dollar spent. What I wonder is why everybody doesn't carry a book around for those inevitable dead spots in life.",
      subtitle: 'Dan Brown',
    };
    this.slides[3] = {
      src: './assets/amish.jpg',
      title:
        'Books are like magic potions; they have the power to transport us to a different world, a different time, a different perspective, and ignite our imagination like nothing else can',
      subtitle: 'Amish Tripathi',
    };
    this.slides[4] = {
      src: './assets/eb.jpg',
      title:
        "Books are wonderful friends. They are companions who won't get tired, bored, or cross. They don't mind how often you read them, and they never go away.",
      subtitle: 'Enid Blyton',
    };
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}
