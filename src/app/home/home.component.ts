import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'EbookPlace';
  filterString: string = '';

  ngOnInit(): void {
    console.log(this.filterString);
  }

  handleSearch() {}
}
