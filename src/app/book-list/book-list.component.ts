import { Component, Input } from '@angular/core';
import { BookListServiceService } from './book-list-service.service';
import { Subscription } from 'rxjs';
import { IBook } from './IBook';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  sub!: Subscription;
  books: IBook[] = [];
  filteredBooks: IBook[] = [];
  errorMessage: string | undefined;

  @Input() filterString: string | undefined;
  @Input() author: string | undefined;

  constructor(
    private bookListService: BookListServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub = this.bookListService.getAllBooks().subscribe({
      next: (books) => {
        this.books = books;
        this.filteredBooks = books;
      },
      error: (err) => (this.errorMessage = err),
    });
    this.filteredBooks = this.books.filter((f) => f.author == this.author);
    console.log(this.books);
  }

  ngOnChanges(): void {
    // alert(this.author);
    if (this.filterString) {
      const search = this.filterString.toLocaleLowerCase();
      this.filteredBooks = this.books.filter(
        (f) =>
          f.bookName.toLocaleLowerCase().includes(search) ||
          f.author.toLocaleLowerCase().includes(search)
      );
    }

    if (this.author != undefined) {
      this.filteredBooks = this.books.filter((f) => f.author == this.author);
    }
  }

  ngDoCheck(): void {
    if (this.author != undefined) {
      this.filteredBooks = this.books.filter(
        (f) =>
          f.author == this.author &&
          f.bookId !== this.route.snapshot.paramMap.get('bookId')
      );
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onBookClick(bookId: string, author: string) {
    this.router.navigate([`/book/${bookId}/${author}`]);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    // window.location.reload();
  }
}
