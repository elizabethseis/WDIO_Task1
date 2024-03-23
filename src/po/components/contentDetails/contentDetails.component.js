const BaseComponent = require('./../common/base.component');

class ContentDetailsComponent extends BaseComponent {
  constructor() {
    super('[class="content"]');
  }

  get pastedText() {
    return this.rootEl.$('[style="font-size: px; line-height: px;"]');
  }

  topBtns(btn) {
    const selectors = {
      bashBtn: '[href="/archive/bash"]',
    };
    return this.rootEl.$(selectors[btn]);
  }
}
module.exports = ContentDetailsComponent;
