// TODO: Make buttons click over to corresponding tabs.
// TODO: Convert buttons into tabs.
// TODO: Add event listener 'click' to each button that changes class to active.
//
// For now make the tab 'repo' always active.

;(function($){
  $(function(){ // jQuery(document).on('ready', function(){

    // Refactored all of this...
    // $('a[href="#contributions"]').on('click', function (){
    //   $(this).addClass('active').siblings().removeClass('active');
    //   $('#contributions').addClass('active').siblings().removeClass('active');
    // });
    //
    // $('a[href="#repositories"]').on('click', function (){
    //   $(this).addClass('active').siblings().removeClass('active');
    //   $('#repositories').addClass('active').siblings().removeClass('active');
    // });
    //
    // $('a[href="#public-activity"]').on('click', function (){
    //   $(this).addClass('active').siblings().removeClass('active');
    //   $('#public-activity').toggleClass('active').siblings().removeClass('active');
    // });
    // Into this...
    $('.tabs > a')
      .on('click', function(){
        var panelId = $(this).attr('href');

        $(this).add(panelId)
          .addClass('active')
        .siblings()
          .removeClass('active');

        // console.log($(this).siblings());
      })
    .filter('[href="#repositories"]')
    // $('[href="#repositories"]')
      .trigger('click') // or .click()

  }); // END document.ready
})(jQuery.noConflict())

;(function(){ // IIFE
  angular.module('TIY-GitHub', [ ])
    // .controller('GenericController', function($http, $scope){
    .run(function($http, $rootScope){
      // jQuery.ajax(. . . ): (jqXHR / Deferred).then
      // jQuery.getJSON(. . .): (jqXHR / Deferred).then
      $http.get('/apis/github/users/boshnivolo.json')
        .then(function(response){
          // Baby steps...
          // $rootScope.name = response.data.name;
          // $rootScope.login = response.data.login;
          // $rootScope.location = response.data.location;

          // Next baby step...
          // $rootScope.user = {
          //   name: response.data.name,
          //   login: response.data.login,
          //   location: response.data.location,
          // }

          // Final baby step...
          $rootScope.user = response.data;
        });
    }) // END run -- load data from `boshnivolo`

    .run(function($http, $rootScope){
      $http.get('/apis/github/users/boshnivolo/repos.json')
        .then(function(response){
          console.log(response.data);

          // First baby step...
          // $rootScope.html_url = repo.html_url;
          // $rootScope.name = repo.name;
          // $rootScope.description = repo.description;
          // $rootScope.updated_at = repo.updated_at;

          // Next baby step...
          // $rootScope.repo = {
          //   html_url: response.data[4].html_url,
          //   name: response.data[4].name,
          //   description: response.data[4].description,
          //   updated_at: response.data[4].updated_at
          // };

          // Final baby step...
          $rootScope.repos = response.data;
        });
    }) // END run -- load data from `boshnivolo/repos.json`
})(); // END IIFE






/* For demo purposes only... */
