import { Component, OnInit, Input, Output, EventEmitter, forwardRef, Renderer2, ViewChild } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormGroup } from '@angular/forms/src/model';
import * as _ from 'underscore';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, Validator } from '@angular/forms';
import { AuthorService } from '../../services/author.service';

export const VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AuthorsListComponent),
  multi: true,
};

export const VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => AuthorsListComponent),
  multi: true,
};

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css'],
  providers: [VALUE_ACCESSOR, VALIDATOR]
})
export class AuthorsListComponent implements OnInit, ControlValueAccessor, Validator {
  selectedItems: Array<any> = [];
  authors: Array<any> = [];
  onChange: boolean;
  onTouched: boolean;
  authorError: boolean;
  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.getAuthours();
  }

  getAuthours() {
    return this.authorService.getAuthors()
      .subscribe(result => {
        this.authors = _.map(result, item => {
          let selectedAuthor = _.find(this.selectedItems, selected => selected._id === item._id);
          item = item;
          item.selected = selectedAuthor ? true : false;
          return item;
        });
      });
  }

  public validate(c: FormControl) {
    return (!this.authorError) ? null : {
      minAuthorError: {
        valid: false,
      },
    };
  }

  public writeValue(value) {
    if (value) {
      if (_.isArray(value)) {
        this.selectedItems = value;
        this.getAuthours();
      } else {
        if (value.selected) {
          this.selectedItems.push(value);
        } else {
          this.selectedItems = _.reject(this.selectedItems, author => author.itemName === value.itemName);
        }
      }
    }

    this.authorError = this.selectedItems.length > 0 ? false : true;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    console.log(isDisabled);
  }

}
