// JavaScript source code
angular.module('angularTerminal.controllers')
    .controller('creditCard',
    ['httpService',
        function (httpService) {
            var name;
            var vm = this;
            var initialCard = {
                creditCardNumber: '',
                expiryMonth: '',
                expiryYear: '',
                CVC: ''
            };

            vm.submitDetails = submitDetails;
            vm.cancelPayment = cancelPayment;
            vm.formatCardNumber = formatCardNumber;
            vm.expiryMonth = [1,2,3,4,5,6,7,8,9,10,11,12];
            vm.expiryYear = [];

            vm.creditCardNumber = '';

            name = function () {}

            function formatCardNumber() {
            }

            function cancelPayment() {
            }

            function submitDetails() {
                if (false) {
                    return;
                }
                console.log("I am here");

            }

            function checkIfValid() {
                if (isValidCreditCardNumber()) {
                    
                }
            }

            httpService.sayHello();

            function init() {
                vm.details = angular.copy(initialCard);
                httpService.getPaymentDetails();
            }

            init();
        }]);
