import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {split} from "ts-node";

@Component({
  selector: 'app-create-component',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

  @Output() newBookEvent = new EventEmitter<Content>();
  newBook: Content;
  addBookFailed: boolean;
  errorMsg: string;

  constructor() {
    this.newBook = {
      id: 0,
      title: '',
      body: '',
      author: '',
    };
    this.addBookFailed = false;
  }


  ngOnInit(): void {
    this.newBookEvent.emit(this.newBook);
  }

  addBook(tags: HTMLInputElement): void {
    const promise = new Promise((successfull, fail) => {
      if (this.checkInput()) {
        successfull('This book was successfully added: ' + this.newBook.title);
      } else {
        fail('Unable to add book');
      }
    });
    promise.then(success => {
      this.addBookFailed = false;
      if (tags.value !== '') {
        this.newBook.tags = tags.value.split(' ');
      }
      this.newBookEvent.emit(this.newBook);
      this.newBook.title = '';
      this.newBook.author = '';
      this.newBook.body = '';
      this.newBook.imgUrl = '';
      this.newBook.type = '';
      tags.value = '';
      console.log(success);
    }).catch(_ => this.addBookFailed = true);
  }
  checkInput(): boolean {
    if (this.newBook.title === '') {
      this.errorMsg = 'Please fill in the title';
      return false;
    } else if (this.newBook.body === '') {
      this.errorMsg = 'Please fill in the description';
      return false;
    } else if (this.newBook.author === ''){
      this.errorMsg = 'Please fill in the author';
      return false;
    }
    return true;
  }
}
