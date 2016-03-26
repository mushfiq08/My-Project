// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.bookService','starter.hadithService'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })
    .state('app.books', {
      url: '/books',
      views: {
        'menuContent': {
          templateUrl: 'templates/books.html',
          controller: 'BooksCtrl'
        }
      }
    })

  .state('app.book', {
    url: '/books/:bookId',
    views: {
      'menuContent': {
        templateUrl: 'templates/book.html',
        controller: 'BookCtrl'
      }
    }
  })
  
  .state('app.chapterText', {
    url: '/books/:bookId/:chapterNumberChapter',
    views: {
      'menuContent': {
        templateUrl: 'templates/bookChapter.html',
        controller: 'BookChapterCtrl'
      }
    }
  })
  
  .state('app.hadiths', {
      url: '/hadiths',
      views: {
        'menuContent': {
          templateUrl: 'templates/hadiths.html',
          controller: 'HadithsCtrl'
        }
      }
   })
   
   .state('app.hadith', {
    url: '/hadiths/:hadithId',
    views: {
      'menuContent': {
        templateUrl: 'templates/hadith.html',
        controller: 'HadithCtrl'
      }
    }
  })
  
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
