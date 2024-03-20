const BaseComponent = require('./../common/base.component');

class ContentDetailsComponent extends BaseComponent {
  constructor() {
    super('[class="content"]');
  }

  get pastedText() {
    return this.rootEl.$('.de1');
  }
}
module.exports = ContentDetailsComponent;
