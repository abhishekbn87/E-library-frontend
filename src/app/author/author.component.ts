import { Component } from '@angular/core';
import { AuthorService } from './author.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IAuthor } from './IAuthor';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent {
  sub!: Subscription;
  authorDetail: IAuthor | undefined;
  author: string = '';
  constructor(
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    var author = '';
    this.sub = this.route.params.subscribe((params) => {
      author = params['author'];
      this.author = author;
      this.sub = this.authorService.getAuthorMetadata(this.author).subscribe({
        next: (data) => (this.authorDetail = data),
        error: (err) => console.log(err),
      });
    });
    if (author) {
      console.log(author);
    }
  }
}
