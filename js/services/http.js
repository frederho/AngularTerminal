// JavaScript source code
angular.module('angularTerminal.services')
    .factory('httpService', [
        '$http',
        function ($http) {
            var service = {
                'sayHello': sayHello,
                'getPaymentDetails': getPaymentDetails,
                'submitDetails': submitDetails
            }


            function submitDetails() {
            };

            function getPaymentDetails() {
                return;
            }

            function sayHello() {
                $http.get('http://polls.apiblueprint.org/questions').then(
                    function (result) {
                    });
            }

            return service;
        }
    ]);
