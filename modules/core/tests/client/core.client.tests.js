'use strict';

(function () {
  beforeAll(function () {
    angular.element(document.querySelector('head')).append('<base href="/">');
  });

  it('should be wrong', function(done) {
	  false.should.be.true();
	  return done();
	});
}());
