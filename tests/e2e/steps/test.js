import {Given, Then, When} from '@cucumber/cucumber';
import {Selector} from 'testcafe';

import config from '../config';

//Scenario:...
Given('Given', async (t) => {
  await t.maximizeWindow().navigateTo(config.GET_APP_URL(config.routes.testPage.root));
});

When('When', async (t, [expectedText]) => {
  const header = await (await Selector('[data-testid="header"]').find('div').innerText).trim();
  await t.expect(header).eql(expectedText);
});

Then('Then', async (t) => {
  const button = await Selector('#button');
  await t.click(button);
});
