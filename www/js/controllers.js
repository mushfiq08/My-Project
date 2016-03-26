angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

// Home page Controller

.controller('HomeCtrl', function($scope, Books, Hadiths) {
    
  $scope.booksLength = Books.getBooksLength();
  $scope.hadithsLength = Hadiths.getHadithsLength();
  
})

// Book Controller Details

.controller('BooksCtrl', function($scope,Books) {
    $scope.books = Books.all();
})

.controller('BookCtrl', function($scope, $stateParams,Books) {
    $scope.book = Books.get($stateParams.bookId);
})

.controller('BookChapterCtrl', function($scope, $stateParams,Books) {
    $scope.text = Books.getChapter($stateParams.bookId , $stateParams.chapterNumberChapter );
})

// Hadith Controller Details

.controller('HadithsCtrl', function($scope,Hadiths) {
    $scope.hadiths = Hadiths.all();
})

.controller('HadithCtrl', function($scope, $stateParams, Hadiths) {
    $scope.hadith = Hadiths.get($stateParams.hadithId);
    console.log($scope.hadith);
})

;
