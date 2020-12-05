import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Content} from '../helper-files/content-interface';
import {BOOKSLIST} from '../helper-files/contentDb';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  }

  constructor(private messageService: MessageService, private http: HttpClient) { }
  getBook(id: number): Observable<Content> {
    return this.http.get<Content>('api/content/' + id);
  }
  getBooksObservable(): Observable<Content[]> {
    this.messageService.add('Content retrieved!');
    return this.http.get<Content[]>('api/content');
  }
  addBook(book: Content): Observable<Content> {
    return this.http.post<Content>('api/content', book, this.httpOptions);
  }
}
