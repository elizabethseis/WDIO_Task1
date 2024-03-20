const {pages} = require('./../po');
const testData = require('./testData.json');

describe('Create new paste', () => {
  beforeEach(async () => {
    await pages('newPaste').open();
    await browser.maximizeWindow();
  });

  it('Validate the page title', async () => {
    await expect(browser).toHaveTitle('Pastebin.com - #1 paste tool since 2002!');
  });

  it('Create a new paste with an expiration for 10 minutes', async () => {
    await pages('newPaste').newCodeInput.newPasteInput.isDisplayed();
    await pages('newPaste').newCodeInput.newPasteInput.setValue(testData.codeInput);
    await browser.scroll(0, 500);
    await pages('newPaste').optionalPasteSettings.settings('pasteExpiration').click();
    await pages('newPaste').optionalPasteSettings.pasteExpiration('pasteExpirationOptions').isDisplayed();
    await pages('newPaste').optionalPasteSettings.pasteExpiration('expirationTenMin').isDisplayed();
    await pages('newPaste').optionalPasteSettings.pasteExpiration('expirationTenMin').click();
    await pages('newPaste').optionalPasteSettings.settings('pasteName').setValue(testData.pasteName);
    await pages('newPaste').optionalPasteSettings.newPasteBtn.click();
    await pages('contentDetails').contentDetails.pastedText.waitForExist();
    await expect(pages('contentDetails').contentDetails.pastedText).toHaveText(testData.codeInput);
    await expect(pages('contentDetails').topDetails.title).toHaveText(testData.pasteName);
    await expect(pages('contentDetails').topDetails.expireTime).toHaveText(testData.pasteExpiration['10Min']);
  });
});
