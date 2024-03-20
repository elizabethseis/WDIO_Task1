const NewPastePage = require('./../pages/newPaste.page');
const ContentDetailsPage = require('./../pages/contentDetails.page');

/**
 *
 * @param {newPaste | contentDetails } name
 * @return NewPastePage | ContentDetailsPage
 */
function pages(name) {
  const items = {
    newPaste: new NewPastePage(),
    contentDetails: new ContentDetailsPage(),
  };
  return items[name];
}
module.exports = {
  NewPastePage,
  ContentDetailsPage,
  pages,
};
