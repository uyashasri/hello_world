angular.module("helloWorldApp", [])

    .directive('helloWorld', [

        function () {

            return {
                scope: {reverse: '='},
                restrict: 'E',
                templateUrl: "temp1.html",
                controller: function ($scope, $http) {

                    var colorArray = [], currentIndex = 0;

                    $http.get('http://yash.dev.hello-world.com/hello_world.php').then(function(response) {

                        $scope.countries = response.data;

                        colorArray = ['green', 'yellow', 'red', 'blue', 'pink']

                        if ($scope.reverse == true)
                        {
                           colorArray.reverse()
                        }

                        angular.forEach($scope.countries,function(country) {

                            country.backgroundColor = colorArray[currentIndex];

                            currentIndex++;

                            if (currentIndex == colorArray.length) {
                                    currentIndex = 0;
                            }

                        })
                    });

                }
            }
        }
    ])

;

