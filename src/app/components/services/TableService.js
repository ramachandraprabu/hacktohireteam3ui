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
        issue: 'Hongwei Fang',
        progress: 100,
        status: 'Free International Call',
        class: 'md-accent'
      },
      {
        issue: 'Praboo Ramachandra',
        progress: 40,
        status: 'Starbucks Voucher',
        class: ''
      },
      {
        issue: 'Dinsuha Dhanushka',
        progress: 100,
        status: 'Starbucks Voucher',
        class: 'md-accent'
      },
      {
        issue: 'Koala Kosala',
        progress: 84,
        status: 'Free International Call',
        class: 'orange'
      },
      {
        issue: 'Keith Batallones',
        progress: 100,
        status: 'Kopitiam Voucher',
        class: 'md-accent'
      },
      {
        issue: 'Muthu Kumar',
        progress: 20,
        status: 'Kopitiam Voucher',
        class: ''
      },
      {
        issue: 'Kian Hong',
        progress: 1,
        status: 'Free International Calls',
        class: 'md-warn'
      },
      {
        issue: 'Thejo Siva',
        progress: 100,
        status: 'Starbucks Voucher',
        class: 'md-accent'
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
