import { Directive, ElementRef, Input } from '@angular/core';
import { Course } from './course-item/course';
import * as moment from 'moment';
import { OnChanges, SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Directive({
  selector: '[appBorderHighlight]'
})

export class BorderHighlightDirective implements OnChanges {
  @Input() createdDate: Date;

  constructor(private el: ElementRef) { }

  ngOnChanges(createdDate: SimpleChanges) {
    const millisecInDay = 1000 * 60 * 60 * 24;
    if (this.createdDate) {
      // diff initially is in milliseconds, convert it to days
      const timeDiff = moment(this.createdDate).diff(moment(new Date())) / millisecInDay;
      let colour = '';

      if (timeDiff >= 0) {
        colour = 'blue 2px solid';
      } else if (timeDiff < 0 && timeDiff >= -14) {
        colour = 'green 2px solid';
      }

      this.highlight(colour);
    }
  }

  private highlight(colour: string) {
    this.el.nativeElement.style.border = colour;
  }

}
