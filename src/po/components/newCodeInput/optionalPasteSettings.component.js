const BaseComponent = require('./../common/base.component');

class OptionalPasteSettingsComponent extends BaseComponent {
  constructor() {
    super('[class="post-form__left"]');
  }
  /**
     *
     * @param {'pasteExpiration' | 'pasteName' | 'NewPasteBtn'} options
     * @returns
     */
  settings(options) {
    const selectors = {
      pasteExpiration: '#select2-postform-expiration-container',
      pasteName: '#postform-name',
    };
    return this.rootEl.$(selectors[options]);
  }

  /**
     *
     * @param {'pasteExpirationOptions' | 'expirationTenMin'} pasteExpirationOptions
     * @returns
     */
  pasteExpiration(pasteExpirationOptions) {
    const selectors = {
      pasteExpirationOptions: '[role="option"]',
      expirationTenMin: '[role="option"]:nth-child(3)',
    };
    return $(selectors[pasteExpirationOptions]);
  }

  get newPasteBtn() {
    return this.rootEl.$('[class="btn -big"]');
  }
}
module.exports = OptionalPasteSettingsComponent;
