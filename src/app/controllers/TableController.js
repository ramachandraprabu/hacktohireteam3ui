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
			{
			  parent: angular.element(document.body),
			  clickOutsideToClose: true,
			  template: 
				'<md-dialog style="padding: 20px 20px 20px 20px;" md-theme="mytheme">' +
				'  <md-dialog-content>' +
				'<h2>Call Details for '+dat.issue+'</h2>' +
				'<p><b>Promotions Offered:</b>' +dat.status+'</p>'+
				'<p><b>CDR Type:</b>' +dat.status+'</p>'+
				'<p><b>IMEI:</b>' +dat.status+'</p>'+
				'<p><b>IMSI:</b>' +dat.status+'</p>'+
				'<p><b>Cause Termination Code:</b>' +dat.status+'</p>'+
				'<p><b>Cause Termination Reason:</b>' +dat.status+'</p>'+
				'<p><b>Location:</b>' +dat.status+'</p>'+
				'  </md-dialog-content>' +
				'</md-dialog>'
		}
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
