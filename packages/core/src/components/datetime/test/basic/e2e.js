const { register, navigate } = require('../../../../../scripts/e2e');

describe('datetime: basic', () => {

  register('navigates', navigate('http://e2e-server/src/components/datetime/test/basic'));

});
