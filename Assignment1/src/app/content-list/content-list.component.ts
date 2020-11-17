import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {ContentService} from '../services/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  contents: Content[];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getBooksObservable().subscribe(booksList => {
      this.contents = booksList;
    });
  }
  submitInput(title: string): void {
    // filter all the results of content to the contents with the given title
    // if it has at least 1 result, then we know its in our contents list
    if (this.contents.filter(content => content.title === title).length > 0) {
      alert('"' + title + '" does exist');
    } else {
      alert('"' + title + '" does not exist');
    }
  }

}
