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
        component :'productList',
        resolve: {
            products: ['ProductService', function(ProductService){
                return ProductService
                        .getProducts()
                        .then(function(res){
                            return res.data;
                        });
            }]
        }
        
    });
    $stateProvider.state({
        name:'addProduct',
        url:'/add-product',
        component :'addProduct'
        
    });
    $stateProvider.state({
        name:'productDetails',
        url:'/product-details/{productId}',
        component :'productDetails',
        resolve: {
            products: ['ProductService','$transition$',
             function(ProductService,$transition$){
                var productId=$transition$.params().productId;
                return ProductService.getProductDetails(productId);
                        
            }]
        }
        
    });
    $stateProvider.state({
        name:'cart',
        url:'/cart',
        component :'cart'
        
    });
    $urlRouterProvider.otherwise('/');
}]);