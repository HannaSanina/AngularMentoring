import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './course-item/course';
import * as moment from 'moment';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Course[], args?: any): any {
    if (value) {
      let newVal = value.sort((a: Course, b: Course) => {
        let timeDiff = moment(a.createdDate).diff(moment(b.createdDate))

        if (timeDiff > 0) {
          return 1;
        } else if (timeDiff < 0) {
          return -1;
        } else {
          return 0;
        }
      });

      return newVal;
    }
  }

}
