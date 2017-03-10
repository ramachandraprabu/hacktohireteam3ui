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
	//tableFetch($http);
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
				'<h2>CDR Type: '+dat.cdrType+'</h2>' +
				'<p><b>IMEI:</b>' +dat.imei+'</p>'+
				'<p><b>IMSI:</b>' +dat.imsi+'</p>'+
				'<p><b>Calling Number:</b>' +dat.callingNumber+'</p>'+
				'<p><b>Called Number:</b>' +dat.calledNumber+'</p>'+
				'<p><b>Recording Entity:</b>' +dat.recordingEntity+'</p>'+
				'<p><b>Location:</b>' +dat.location+'</p>'+
				'<p><b>Call Duration:</b>' +dat.callDuration+'</p>'+
				'<p><b>Answer Time:</b>' +dat.answerTime+'</p>'+
				'<p><b>Seizure Time:</b>' +dat.seizureTime+'</p>'+
				'<p><b>Release Time:</b>' +dat.releaseTime+'</p>'+
				'<p><b>Cause For Termination:</b>' +dat.causeForTermination+'</p>'+
				'<p><b>Basic Service:</b>' +dat.basicService+'</p>'+
				'<p><b>MSC Address:</b>' +dat.mscAddress+'</p>'+				
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
