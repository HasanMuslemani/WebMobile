import {Component, ElementRef, EventEmitter, Inject, OnInit, Output, ViewChild} from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {ContentService} from '../services/content.service';
import {MessageService} from '../services/message.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

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

  constructor(private contentService: ContentService, private messageService: MessageService, public dialog: MatDialog) {
    this.newBook = {
      title: '',
      body: '',
      author: '',
      tags: ''
    };
    this.addBookFailed = false;
  }

  ngOnInit(): void {
    this.newBookEvent.emit(this.newBook);
  }
  openAddGameDialog(): void {
    const gameDialogRef = this.dialog.open(CreateContentDialogComponent, {
      width: '400px'
    });
    gameDialogRef.afterClosed().subscribe(newBookFromDialog => {
      this.newBook = newBookFromDialog;
      this.addBook();
    });
  }
  addBook(): void {
    const promise = new Promise((successful, fail) => {
      if (this.checkInput()) {
        successful('This book was successfully added: ' + this.newBook.title);
      } else {
        fail('Unable to add book');
      }
    });
    promise.then(success => {
      this.addBookFailed = false;
      if (this.newBook.tags !== '') {
        this.newBook.tags = this.newBook.tags.split(' ');
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
      this.newBook.tags = '';
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

class DialogData {
}

@Component({
  selector: 'app-create-content-dialog',
  templateUrl: 'create-content-dialog.component.html',
})
export class CreateContentDialogComponent {
  newBook: any;

  constructor(public dialogRef: MatDialogRef<CreateContentDialogComponent>) {
    this.newBook = {
      title: '',
      body: '',
      author: '',
      tags: ''
    };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
