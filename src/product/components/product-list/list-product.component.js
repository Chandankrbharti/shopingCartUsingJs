angular.module('shoppingcart.product')
.controller('productList',['ProductService',
function(ProductService){
    var self=this;
  this.$onInit=function(){
    ProductService.getProducts().then(function(result){
        self.products=result.data;
    });
  }  
    
}])
    .component('productList', {
        templateUrl: 'src/product/components/product-list/list-product.component.html'
    });