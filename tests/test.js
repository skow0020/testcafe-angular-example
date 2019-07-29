import { waitForAngular } from 'testcafe-angular-selectors';
import { LoginPage } from '../pages/loginPage';

const loginPage = new LoginPage();

fixture`Book Collection`
  .page('https://miherlosev.github.io/e2e_angular/')
  .before(async ctx => {
    ctx.username = 'test';
    ctx.password = 'test';
  })
  .beforeEach(async t => {
    await waitForAngular();
  });

test
  ('Login', async t => {
    await t
      .typeText(loginPage.username, t.fixtureCtx.username)
      .typeText(loginPage.password, t.fixtureCtx.password)
      .click(loginPage.loginBtn);
  });