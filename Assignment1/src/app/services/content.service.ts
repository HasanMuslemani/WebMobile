import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Content} from '../helper-files/content-interface';
import {BOOKSLIST} from '../helper-files/contentDb';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private messageService: MessageService) { }
  getBooksObservable(): Observable<Content[]> {
    this.messageService.add('Content retrieved!');
    return of(BOOKSLIST);
  }
}
