import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  contents: Content[];

  constructor() {
    const content1: Content = {
      id: 0,
      author: 'J.K. Rowling',
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg',
      type: 'Fantasy',
      title: 'Harry Potter and the Philosopher\'s Stone',
      body: 'A boy learns that he is the son of 2 powerful wizards.',
      tags: ['1', '2', '3']
    };
    const content2: Content = {
      id: 1,
      author: 'Suzanne Collins',
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/41WAJbx1e2L._SX325_BO1,204,203,200_.jpg',
      type: 'Adventure',
      title: 'The Hunger Games',
      body: 'Fight to be the last one standing!',
      tags: ['1', '2', '3']
    };
    const content3: Content = {
      id: 2,
      author: 'Gary Paulsen',
      imgUrl: 'https://m.media-amazon.com/images/I/61ojqdijykL.jpg',
      type: 'Adventure',
      title: 'Hatchet',
      body: 'A boy is deserted on an island alone.',
      tags: ['1', '2', '3']
    };
    const content4: Content = {
      id: 3,
      author: 'Stephen King',
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51vRAjC5QvL._SX302_BO1,204,203,200_.jpg',
      type: 'Horror',
      title: 'The Shining',
      body: 'Do not enter that room. It is haunted!',
      tags: ['1', '2', '3']
    };
    const content5: Content = {
      id: 4,
      author: 'Justin Somper',
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/71yXseWBvQL.jpg',
      type: 'Horror',
      title: 'Vampirates: Demons of the Ocean',
      body: 'A young girl lost at sea is saved by a spooky pirate ship!',
      tags: ['1', '2', '3']
    };
    this.contents = [content1, content2, content3, content4, content5];
  }

  ngOnInit(): void {
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
