const BaseComponent = require('./../common/base.component');

class NewCodeInputComponent extends BaseComponent {
  constructor() {
    super('[class="form-group field-postform-text required"]');
  }

  get newPasteInput() {
    return this.rootEl.$('#postform-text');
  }
}
module.exports = NewCodeInputComponent;
