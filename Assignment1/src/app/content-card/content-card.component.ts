import { Component, OnInit } from '@angular/core';
import {ContentList} from '../helper-files/content-list';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})

export class ContentCardComponent implements OnInit {
  private mContentList: ContentList;
  get contentList(): ContentList {
    return this.mContentList;
  }

  constructor() {
    const content1: Content = {
      id: 1,
      author: 'author1',
      title: 'title1',
      body: 'body1'
    };
    const content2: Content = {
      id: 2,
      author: 'author2',
      title: 'title2',
      body: 'body2'
    };
    const content3: Content = {
      id: 3,
      author: 'author3',
      title: 'title3',
      body: 'body3'
    };
    this.mContentList = new ContentList();
    this.mContentList.addContent(content1);
    this.mContentList.addContent(content2);
    this.mContentList.addContent(content3);

    console.log('hello' + this.mContentList[0]);
  }

  ngOnInit(): void {
  }

}
