import { AppPage } from './app.po';

describe('mentoring-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  let courses = ['Mr. IQ', 'Magneta', 'Bombasto'];

   
  /* it('should pass properties to children properly', function () {
    let parent = element.all(by.tagName('app-courses-page')).get(0);
    let heroes = parent.all(by.tagName('app-course-item'));
   
    for (let i = 0; i < courses.length; i++) {
      let childTitle = heroes.get(i).element(by.tagName('h3')).getText();
      let childDetail = heroes.get(i).element(by.tagName('p')).getText();
      expect(childTitle).toEqual(courses[i] + ' says:');
    }
  }); */
});
