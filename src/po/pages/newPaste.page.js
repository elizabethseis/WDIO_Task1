const {OptionalPasteSettings, NewCodeInput} = require('./../components');
const BasePage = require('./../pages/base.page');

class NewPastePage extends BasePage {
  constructor() {
    super('');
    this.optionalPasteSettings = new OptionalPasteSettings();
    this.newCodeInput = new NewCodeInput();
  }
}
module.exports = NewPastePage;
