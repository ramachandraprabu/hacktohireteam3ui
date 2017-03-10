(function(){
  'use strict';

  angular.module('app')
          .service('navService', [
          '$q',
          navService
  ]);

  function navService($q){
    var menuItems = [
	      {
        name: 'Dashboard',
        icon: 'dashboard',
        sref: '.table'
      },
      {
        name: 'Manage Rule',
        icon: 'view_module',
        sref: '.profile'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
