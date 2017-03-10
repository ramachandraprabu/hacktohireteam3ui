(function(){

  angular
    .module('app')
    .controller('TableController', [
      'tableService', '$http',
      TableController
    ]);

  function TableController(tableService, $http) {
    var vm = this;
    vm.showDialogue = showDialogue;

    vm.tableData = [];
	tableFetch($http);
    tableService
      .loadAllItems()
      .then(function(tableData) {
		 
        vm.tableData = [].concat(tableData);
      });
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

function showDialogue(ev) {
	
	console.log("SHOWING DIALOGUE");
}




})();
