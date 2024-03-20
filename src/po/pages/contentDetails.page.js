const {ContentDetails, InfoTopDetails} = require('./../components');

class ContentDetailsPage {
  constructor() {
    this.contentDetails = new ContentDetails();
    this.topDetails = new InfoTopDetails();
  }
}
module.exports = ContentDetailsPage;
