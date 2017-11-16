const { register, navigate, Page } = require('../../../../../scripts/e2e');
const testPageURL = 'http://e2e-server/src/components/select/test/basic';

describe('select: basic', () => {

  register('navigates', navigate(testPageURL));

  describe('present', () => {

    register('shows selector', driver => {
      const page = new Page(driver, testPageURL);
      return page.present('.e2eSelectGender > button', { waitFor: 'ion-alert' });
    });

  });

});
