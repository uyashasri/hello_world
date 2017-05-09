angular.module('helloWorldApp', []).
 controller('HelloWorldController', ['$scope', '$http', function HelloWorldController ($scope, $http) {

    $http.get('http://yash.dev.hello-world.com/hello_world.php').then(function(response) {
        $scope.countries = response.data;
    });

    var rows = document.getElementsByTagName('tr');

    var colorArray = ['green', 'yellow']
    for (var rowKey = 1; rowKey < rows.length; rowKey++) {
        rows[rowKey].style.backgroundColor = colorArray[rowKey];
    }
}]);






