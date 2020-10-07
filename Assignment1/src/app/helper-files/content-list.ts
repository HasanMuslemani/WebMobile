import {Content} from './content-interface';

export class ContentList {
  private mContents: Content[];

  get contents(): Content[] {
    return this.mContents;
  }

  constructor() {
    this.mContents = [];
  }

  addContent(content: Content): void {
    this.mContents.push(content);
  }
  numberOfItems(): number {
    return this.mContents.length;
  }
  outputItemInfo(index: number): string {
    if (index >= 0 && index <= this.contents.length - 1) {
      return '<h1>Output for index ' + index + ': ' + this.contents[index].title + '</h1>';
    } else {
      return '<h1>Error: Please enter a valid input</h1>';
    }
  }
}
