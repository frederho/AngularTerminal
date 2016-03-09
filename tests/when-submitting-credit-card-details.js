// JavaScript source code
// JavaScript source code
describe('When submitting creditcard details', function () {

    beforeEach(module('angularTerminal.controllers', 'angularTerminal.services'));

    //Using controller as with VM means that we do not have to work with scope.
    //any property we expect to find in the controller scope is assigned to the controller directly
    var card,
        httpService,
        submitSpy;
    beforeEach(inject(function ($controller, $rootScope, httpService) {
        var $scope = $rootScope.$new();
        submitSpy =jasmine.createSpy('httpService.submitDetails')
        httpService = httpService;
        httpService.sayHello = submitSpy;
        card = $controller('creditCard', { $scope: $scope, httpService: httpService });
        $scope.vm = card;
        spyOn(card, 'submitDetails');
        console.log("I have been called");
        card.submitDetails();
    }));

    it('it should not submit incomplete payment details', function () {
        expect(card.submitDetails).toHaveBeenCalled();
        expect(submitSpy).toHaveBeenCalled();
    });

});