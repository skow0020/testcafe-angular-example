import { AngularSelector } from 'testcafe-angular-selectors';
import { BasePage } from './basePage';

export class FindBookPage extends BasePage {
  constructor () {
    super();

    this.searchInput = AngularSelector('bc-book-search').find('input');
    this.bookPreviews = AngularSelector('bc-book-preview');
  }
}