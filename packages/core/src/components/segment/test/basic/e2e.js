const { register, navigate } = require('../../../../../scripts/e2e');

describe('segment: basic', () => {

  register('navigates', navigate('http://e2e-server/src/components/segment/test/basic'));

});
