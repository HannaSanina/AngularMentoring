import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './course-item/course';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: Course[], field: string, searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => it[field].toLowerCase().includes(searchText));
  }

}
