angular.module('shoppingcart.product')
    .component('productDetails', {
        templateUrl: 'src/product/components/product-details/details-product.component.html',
        bindings:{
            products :'<'
        }
    });