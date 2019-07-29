import { waitForAngular } from 'testcafe-angular-selectors';
import { LoginPage } from '../pages/loginPage'
import { FindBookPage } from '../pages/findBookPage';

const loginPage = new LoginPage();
const findBookPage = new FindBookPage();

fixture `Book Collection`
  .page('https://miherlosev.github.io/e2e_angular/')
  .beforeEach(async t => {
    await waitForAngular();

    await t
      .typeText(loginPage.username, 'test')
      .typeText(loginPage.password, 'test')
      .click(loginPage.loginBtn);
  });

// test("find a book", async t => {
//   await findBookPage.navigateToBrowseBooksPage();

//   await t
//     .typeText(findBookPage.searchInput, 'The Hunger Games')
//     .expect(findBookPage.bookPreviews.count).gt(0);
// });

test("zero books", async t => {
  await findBookPage.navigateToBrowseBooksPage();

  await t
    .typeText(findBookPage.searchInput, 'The Hunger Games')
    .expect(findBookPage.bookPreviews.count).eql(0);
});