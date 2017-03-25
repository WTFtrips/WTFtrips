angular.module('addbook' , [])

.controller('BookController', function ($scope , $window , $location , book) {
  $scope.book = {};

  if($location.path() === '/books/add' || $location.path() === '/links'){
  if(!$window.localStorage.getItem("user.type")) {
        $location.path('/');
      } 
  }

  
  $scope.cartshow=false
  $scope.menuclk=true
  $scope.book.type="book"
  $scope.book.approved='true'
  $scope.addbook = function () {
  	book.addbook($scope.book)
  	.then(function (Book) {
        console.log(Book)
        $location.path('/books');
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  $scope.updatebook = function (bk) {
    console.log(bk)
    book.updatebook(bk)
    .then(function (Book) {
        console.log(Book)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
   $scope.showBook = function () {
    book.showbook($scope.book).then(function(data) {
    $scope.book = data;
  });
  }

  /// turn image into buffer
  $scope.click=false
  $scope.imagetext=""
  $scope.reader=new FileReader();
  $scope.loading=false;
  $scope.previewFile=function(){
    $scope.loading=true;
    $scope.$apply();
    if ($scope.image_url===undefined || Object.keys($scope.image_url).length){
      $scope.book.image_url=$scope.imagetext
      $scope.$apply()
    }else{
      $scope.reader.readAsDataURL($scope.image_url); //reads the data as a URL
      setTimeout(function(){
        $scope.book.image_url=$scope.reader.result;
        $scope.$apply()
      },500);
    }
    $scope.loading=false;
  }

  //upload book
 
  $scope.file={}
  $scope.filetext="";
  $scope.readfile=new FileReader();
  $scope.prosFile=function(){
    $scope.book.approved='false'
    $scope.loading=true;
    $scope.$apply()
    if ($scope.filetext!==""){
      $scope.book.type="link"
      //$scope.book.title="link"
      $scope.book.link=$scope.filetext
    }else{
      $scope.readfile.readAsDataURL($scope.file); //reads the data as a URL
      setTimeout(function(){
        $scope.book.link=$scope.readfile.result;
        $scope.book.type="link"
        $scope.$apply()
        //console.log($scope.readfile.result)
        },1000);
      }
      $scope.loading=false;
    }
 
  // if($location.path() === "/upload"){
  //   alert('hey')
  // }

$scope.booktab=function(link){
  window.open(link,"_blank")
}

});



