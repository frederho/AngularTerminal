// JavaScript source code
describe('when getting collection, should get data', function() {
    var result;
    beforeEach(module('angularTerminal.services'));
    beforeEach(inject(function(httpService, $httpBackend) {
       
        result = httpService.sayHello();

    }));

    afterEach(inject(function($httpBackend) {
        $httpBackend.verifyNoOutstandingRequest();
    }));
    

});