import { Component } from '@angular/core';
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { BorderHighlightDirective } from './border-highlight.directive';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { By } from '@angular/platform-browser';

@Component({
  template: '<div class="course-item" appBorderHighlight createdDate="2018-04-01"></div>'
})
class TestBlueComponent {
}

@Component({
  template: '<div class="course-item" appBorderHighlight createdDate="2018-02-18"></div>'
})
class TestGreenComponent {
}

@Component({
  template: '<div class="course-item" appBorderHighlight createdDate="2017-02-18"></div>'
})
class TestEmptyComponent {
}

describe('Directive: Border highlight', () => {
  let component: any;
  let fixture: ComponentFixture<any>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestBlueComponent, TestGreenComponent, TestEmptyComponent, BorderHighlightDirective]
    }).compileComponents();
  });

  it('color the border to blue for upcoming courses', () => {
    fixture = TestBed.createComponent(TestBlueComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('.course-item'));
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.border).toBe('2px solid blue');
  });

  it('color the border to green for recent courses', () => {
    fixture = TestBed.createComponent(TestGreenComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('.course-item'));
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.border).toBe('2px solid green');
  });

  it('no color of the border for non recent and non upcomping courses', () => {
    fixture = TestBed.createComponent(TestEmptyComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('.course-item'));
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.border).toBe('');
  });
});
