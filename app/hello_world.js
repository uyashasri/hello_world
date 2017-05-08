angular.
 module('helloWorldApp').
 controller('HelloWorldController' , ['$http', function HelloWorldController ($http) {

    $http.get('yash.dev.hello-world.com/hello-world.php').then(function(response) {
        $scope.countries = response.data;
    });
}]);





// var rows = document.getElementsByTagName('tr');

// var colorArray = ['', 'blue', 'green', 'red', 'yellow', 'orange']
// for (var rowKey = 1; rowKey < rows.length; rowKey++) {
//     rows[rowKey].style.backgroundColor = colorArray[rowKey];
// }
