(function(){
  'use strict';

  angular.module('app')
        .service('tableService', [
        '$q',
      tableService
  ]);

  function tableService($q){
    var tableData = [
      {
        cdrType: "MOC",
        imei: "301007645565635",
        imsi: "017881044129250",
        callingNumber: "18016754110",
        calledNumber: "12282120300",
        recordingEntity: "000006623839681",
        location: "12879",
        callReference: "1228",
        callDuration: "2171.2",
        answerTime: "2013-09-10 07:46:44",
        seizureTime: "",
        releaseTime: "2013-09-10 08:22:55",
        causeForTermination: "00",
        basicService: "11",
        mscAddress: "000006623839681"
      },
      {
        cdrType: "MTC",
        imei: "301007469712137",
        imsi: "011948009365740",
        callingNumber: "18016754110",
        calledNumber: "12282120300",
        recordingEntity: "000006623839681",
        location: "20301",
        callReference: "3798",
        callDuration: "2171.2",
        answerTime: "2013-09-10 07:46:44",
        seizureTime: "",
        releaseTime: "2013-09-10 08:22:55",
        causeForTermination: "00",
        basicService: "11",
        mscAddress: "000006623839681"
      },
      {
        cdrType: "MOC",
        imei: "301007645565635",
        imsi: "017881044129250",
        callingNumber: "18016754110",
        calledNumber: "12282120300",
        recordingEntity: "000006623839681",
        location: "12879",
        callReference: "1228",
        callDuration: "2171.2",
        answerTime: "2013-09-10 07:46:44",
        seizureTime: "",
        releaseTime: "2013-09-10 08:22:55",
        causeForTermination: "00",
        basicService: "11",
        mscAddress: "000006623839681"
      },
      {
        cdrType: "MOC",
        imei: "301007645565635",
        imsi: "017881044129250",
        callingNumber: "18016754110",
        calledNumber: "12282120300",
        recordingEntity: "000006623839681",
        location: "12879",
        callReference: "1228",
        callDuration: "2171.2",
        answerTime: "2013-09-10 07:46:44",
        seizureTime: "",
        releaseTime: "2013-09-10 08:22:55",
        causeForTermination: "00",
        basicService: "11",
        mscAddress: "000006623839681"
      },
      {
        cdrType: "MOC",
        imei: "301007645565635",
        imsi: "017881044129250",
        callingNumber: "18016754110",
        calledNumber: "12282120300",
        recordingEntity: "000006623839681",
        location: "12879",
        callReference: "1228",
        callDuration: "2171.2",
        answerTime: "2013-09-10 07:46:44",
        seizureTime: "",
        releaseTime: "2013-09-10 08:22:55",
        causeForTermination: "00",
        basicService: "11",
        mscAddress: "000006623839681"
      },
      {
        cdrType: "MOC",
        imei: "301007645565635",
        imsi: "017881044129250",
        callingNumber: "18016754110",
        calledNumber: "12282120300",
        recordingEntity: "000006623839681",
        location: "12879",
        callReference: "1228",
        callDuration: "2171.2",
        answerTime: "2013-09-10 07:46:44",
        seizureTime: "",
        releaseTime: "2013-09-10 08:22:55",
        causeForTermination: "00",
        basicService: "11",
        mscAddress: "000006623839681"
      },
      {
        cdrType: "MOC",
        imei: "301007645565635",
        imsi: "017881044129250",
        callingNumber: "18016754110",
        calledNumber: "12282120300",
        recordingEntity: "000006623839681",
        location: "12879",
        callReference: "1228",
        callDuration: "2171.2",
        answerTime: "2013-09-10 07:46:44",
        seizureTime: "",
        releaseTime: "2013-09-10 08:22:55",
        causeForTermination: "00",
        basicService: "11",
        mscAddress: "000006623839681"
      },
      {
        cdrType: "MOC",
        imei: "301007645565635",
        imsi: "017881044129250",
        callingNumber: "18016754110",
        calledNumber: "12282120300",
        recordingEntity: "000006623839681",
        location: "12879",
        callReference: "1228",
        callDuration: "2171.2",
        answerTime: "2013-09-10 07:46:44",
        seizureTime: "",
        releaseTime: "2013-09-10 08:22:55",
        causeForTermination: "00",
        basicService: "11",
        mscAddress: "000006623839681"
      }
    ];

    function PickRandom() {
      return Object.assign({}, tableData[Math.floor(Math.random()*tableData.length)]);
    }

    return {
      loadAllItems : function() {
        return $q.when(tableData);
      },
      /**
       * Query expects that `limit`,`page`, and `order` fields be present
       */
      loadByPagination: function (query) {
        query = query || {limit:10,page:1};
         
        var list = [];
        var start = (query.page-1)*query.limit;
        var end = start + query.limit;
        for (var i = start; i < end; i++) {
          var f = PickRandom();
          f.id = i+1;
          list.push(f);
        }
        return $q.when({items:list,count:800});
      }
    };
  }
})();
