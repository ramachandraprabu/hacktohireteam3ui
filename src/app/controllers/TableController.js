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
	  
	  function showDialogue(dat) {
		  console.log(dat);
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Caller Details for '+dat.issue)
        .textContent('Caller Detail Data Goes Here')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
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
