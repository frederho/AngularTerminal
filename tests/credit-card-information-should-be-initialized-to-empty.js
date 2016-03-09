// JavaScript source code
describe('Unit Test', function () {

    beforeEach(module('angularTerminal.controllers', 'angularTerminal.services'));

    //Using controller as with VM means that we do not have to work with scope.
    //any property we expect to find in the controller scope is assigned to the controller directly
    var card;
    beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
        var $scope = $rootScope.$new();
        $httpBackend.expectGET('http://polls.apiblueprint.org/questions').respond();
        card = $controller('creditCard', { $scope: $scope });
        $scope.vm = card;
        $httpBackend.flush();
    }));

    afterEach(inject(function($httpBackend) {
        $httpBackend.verifyNoOutstandingExpectation   
    }));

    it('should contain a list of entries', function () {
        expect(card.details).toEqual({
            creditCardNumber: '',
            expiryMonth: '',
            expiryYear: '',
            CVC: ''
        });
    });

});