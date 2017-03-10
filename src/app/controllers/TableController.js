(function(){

  angular
    .module('app')
    .controller('TableController', [
      'tableService', '$http','$mdDialog',
      TableController
    ]);

  function TableController(tableService, $http, $mdDialog) {
    var vm = this;
    vm.showDialogue = showDialogue;

    vm.tableData = [];
	tableFetch($http);
    tableService
      .loadAllItems()
      .then(function(tableData) {
		 
        vm.tableData = [].concat(tableData);
      });
	  
	  function showDialogue(ev) {
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Caller Detail')
        .textContent('Caller Detail Data Goes Here')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(ev)
    );
}

  }
function tableFetch(http) {
	 console.log("Callin Data Fetch");
	http({
  method: 'GET',
  url: 'http://ip.jsontest.com'
}).then(function successCallback(response) {
 console.log(response.data);
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
}  





})();
