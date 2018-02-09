angular.module('shoppingcart', [
    'ui.router',
    'shoppingcart.shared',
    'shoppingcart.product',
    'shoppingcart.cart' 
]);

angular.module('shoppingcart').config(['$stateProvider','$urlRouterProvider',
function($stateProvider,$urlRouterProvider){
    $stateProvider.state({
        name:'home',
        url:'/',
        component :'productList'
        
    });
    $urlRouterProvider.otherwise('/');
}]);