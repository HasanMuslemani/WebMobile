import { Pipe, PipeTransform } from '@angular/core';
import {Content} from './helper-files/content-interface';

@Pipe({
  name: 'contentType'
})
export class ContentTypePipe implements PipeTransform {

  transform(content: Content[], type: string): Content[] {
    return content.filter(t => t.type === type);
  }

}
