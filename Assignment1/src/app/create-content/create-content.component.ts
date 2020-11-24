import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {ContentService} from '../services/content.service';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

  @Output() newBookEvent = new EventEmitter<Content>();
  newBook: any;
  addBookFailed: boolean;
  errorMsg: string;

  constructor(private contentService: ContentService, private messageService: MessageService) {
    this.newBook = {
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
    const promise = new Promise((successful, fail) => {
      if (this.checkInput()) {
        successful('This book was successfully added: ' + this.newBook.title);
      } else {
        fail('Unable to add book');
      }
    });
    promise.then(success => {
      this.addBookFailed = false;
      if (tags.value !== '') {
        this.newBook.tags = tags.value.split(' ');
      }
      // add the new book to server
      let newBookFromServer: Content;
      this.contentService.addBook(this.newBook).subscribe(serverBook => {
        newBookFromServer = serverBook;
        this.newBookEvent.emit(newBookFromServer);
        this.messageService.add(newBookFromServer.title + ' was added to the server');
      });
      // reset all input values
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
