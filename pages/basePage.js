import { AngularSelector } from 'testcafe-angular-selectors';
import { t } from 'testcafe';

export class BasePage {
  constructor () {
    const navigationItem = AngularSelector('bc-nav-item');

    this.toolbar = AngularSelector('bc-toolbar');
    this.sidenav = {
      myCollectionNavItem: navigationItem.find('a').withText('My Collection'),
      browseBooksNavItem: navigationItem.find('a').withText('Browse Books')
    };

    this.openToolbarBtn = this.toolbar.find('button');
  }

  async navigateToBrowseBooksPage () {
    await t
      .click(this.openToolbarBtn)
      .click(this.sidenav.browseBooksNavItem);
  }
}