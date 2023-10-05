import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookListServiceService } from '../book-list/book-list-service.service';
import { IBook } from '../book-list/IBook';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent {
  sub!: Subscription;
  bookDetail: IBook | undefined;
  private bookId: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookListServiceService
  ) {}

  ngOnInit(): void {
    var id: string = '';
    this.sub = this.route.params.subscribe((params) => {
      id = params['bookId'];
      this.bookId = id;
      this.sub = this.bookService.getBookById(this.bookId).subscribe({
        next: (data) => (this.bookDetail = data),
        error: (err) => console.log(err),
      });
    });
  }
}
