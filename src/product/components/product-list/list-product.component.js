angular.module('shoppingcart.product')
.controller('productListCtrl',['ProductService',
function(ProductService){
    var self=this;
    self.products=[];
  this.$onInit=function(){
    ProductService.getProducts().then(function(result){
        self.products=result.data;
    });
  };  
  ProductService.getProducts
}])
    .component('productList', {
        templateUrl: 'src/product/components/product-list/list-product.component.html',
        controller:'productListCtrl'
    });