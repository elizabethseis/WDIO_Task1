const {pages} = require('./../po');
const testData = require('./testData');

describe('Create new paste', () => {
  beforeEach(async () => {
    await pages('newPaste').open();
    await browser.maximizeWindow();
  });

  it('Validate the page title', async () => {
    await expect(browser).toHaveTitle('Pastebin.com - #1 paste tool since 2002!');
  });

  it('Create a new paste with Paste Expiration: "10 Minutes"', async () => {
    await pages('newPaste').newCodeInput.newPasteInput.isDisplayed();
    await pages('newPaste').newCodeInput.newPasteInput.setValue(testData.input.codeInpuTask1);
    await browser.scroll(0, 500);
    await pages('newPaste').optionalPasteSettings.settings('pasteExpiration').click();
    await pages('newPaste').optionalPasteSettings.pasteExpiration('pasteExpirationOptions').isDisplayed();
    await pages('newPaste').optionalPasteSettings.pasteExpiration('expirationTenMin').isDisplayed();
    await pages('newPaste').optionalPasteSettings.pasteExpiration('expirationTenMin').click();
    await pages('newPaste').optionalPasteSettings.settings('pasteName').setValue(testData.input.pasteNametask1);
    await pages('newPaste').optionalPasteSettings.newPasteBtn.click();
    await expect(pages('contentDetails').contentDetails.pastedText).toHaveText(testData.input.codeInpuTask1);
    await expect(pages('contentDetails').topDetails.title).toHaveText(testData.input.pasteNametask1);
    await expect(pages('contentDetails').topDetails.expireTime).toHaveText(testData.pasteExpiration.tenMin);
  });

  it('Create a new paste with a Syntax Highlighting: "Bash" and Paste Expiration: "10 Minutes"', async () => {
    await pages('newPaste').newCodeInput.newPasteInput.isDisplayed();
    await pages('newPaste').newCodeInput.newPasteInput.setValue(testData.input.codeInpuTask2);
    await browser.scroll(0, 500);
    await pages('newPaste').optionalPasteSettings.settings('syntaxHighlighting').click();
    await pages('newPaste').optionalPasteSettings.syntaxHighlighting('searchSyntax').isDisplayed();
    await pages('newPaste').optionalPasteSettings.syntaxHighlighting('searchSyntax').setValue(testData.syntaxHighlighting.bash);
    await browser.keys('\uE007');
    await pages('newPaste').optionalPasteSettings.settings('pasteExpiration').click();
    await pages('newPaste').optionalPasteSettings.pasteExpiration('expirationTenMin').isDisplayed();
    await pages('newPaste').optionalPasteSettings.pasteExpiration('expirationTenMin').click();
    await pages('newPaste').optionalPasteSettings.settings('pasteName').setValue(testData.input.pasteNametask2);
    await pages('newPaste').optionalPasteSettings.newPasteBtn.click();
    await expect(pages('contentDetails').contentDetails.pastedText).toHaveText(testData.input.codeInpuTask2);
    await expect(pages('contentDetails').topDetails.title).toHaveText(testData.input.pasteNametask2);
    await expect(pages('contentDetails').topDetails.expireTime).toHaveText(testData.pasteExpiration.tenMin);
    await expect(pages('contentDetails').contentDetails.topBtns('bashBtn')).toHaveText(testData.syntaxHighlighting.bash);
  });
});
