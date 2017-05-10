angular.module('helloWorldApp', []).
 controller('HelloWorldController', ['$scope', '$http', function HelloWorldController ($scope, $http)
 {

    $http.get('http://yash.dev.hello-world.com/hello_world.php').then(function(response) {

        $scope.countries = response.data;

        var colorArray = ['green', 'yellow', 'red', 'blue', 'pink']
        var currentIndex = 0;

        angular.forEach($scope.countries,function(country) {

            country.backgroundColor = colorArray[currentIndex];

            currentIndex++;

            if (currentIndex == colorArray.length) {
                    currentIndex = 0;
            }

        });
    });



    // var rows = angular.element($document[0].getElementsByTagName('tr'));
    // console.log($document[0].getElementsByTagName('tr'));
    // // var rows = angular.element(row);

    // var colorArray = ['green', 'yellow', 'red', 'blue', 'pink']
    // for (var rowKey = 1; rowKey < rows.length; rowKey++) {
    //     rows[rowKey].style.backgroundColor = colorArray[rowKey];
    // }
}]);
