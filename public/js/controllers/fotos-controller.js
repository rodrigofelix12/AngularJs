angular.module('alurapic').controller('FotosController', function($scope, $http) {

    $scope.foto = [];

    $http.get('v1/fotos')
    .success(function(retorno) {
        console.log(retorno);
        $scope.fotos = retorno;
    })
    .error(function(error) {
        console.log(error);
    })

});