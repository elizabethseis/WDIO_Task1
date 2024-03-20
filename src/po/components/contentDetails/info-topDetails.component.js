const BaseComponent = require('./../common/base.component');

class InfoTopDetailsComponent extends BaseComponent {
  constructor() {
    super('[class="info-bar"]');
  }

  get title() {
    return this.rootEl.$('[class="info-top"]');
  }

  get expireTime() {
    return this.rootEl.$('[class="expire"]');
  }
}
module.exports = InfoTopDetailsComponent;
