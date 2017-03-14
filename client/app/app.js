// Route for all page when url go to page
angular.module('books',
  ['book.auth',
  'book.main',
  'book.services',
  'addbook',
  'ngRoute'
	])
.config(function($routeProvider, $httpProvider){
  $routeProvider
	.when('/signup', {
      templateUrl: 'app/account/signup.html',
      controller: 'AuthController'
    })
    .when('/signin', {
      templateUrl: 'app/account/signin.html',
      controller: 'AuthController'
    })     
  .when('/signout', {
      templateUrl: 'app/account/signout.html',
      controller: 'AuthController'
    })
	.when('/', {
      templateUrl: 'app/main/Suntour.html',
      controller: 'MainController'
    })
  .when('/books/add',{
    templateUrl: 'app/account/add_book.html',
    controller:'BookController'
  })
  .when('/books',{
    templateUrl:'app/account/showbooks.html',
    controller:'BookController'
  })
  .when('/aboutus',{
    templateUrl:'app/account/aboutus.html',
    controller:'BookController'
  })
  .when('/upload',{
    templateUrl:'app/account/upload.html',
    controller:'BookController'
  })
  .when('/links',{
    templateUrl:'app/account/showlinks.html',
    controller:'BookController'
  })
  .when('/food',{
    templateUrl:'app/account/food.htm',
    controller:'BookController'
  })
    .otherwise({redirectTo:'/'});
})