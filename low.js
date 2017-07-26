


  

 //[ {0},{1},{2},{3},]

function GetData(cb) {

    $.ajax({
      url: 'https://data.kaohsiung.gov.tw/opendata/DownLoad.aspx?Type=2&CaseNo1=AE&CaseNo2=15&FileType=1&Lang=C&FolderType=',
      type: 'GET',
      dataType: 'json',
      success: function(response){  //成功的時候執行一個function()帶回資料到cb，console呈現取得的資料
      console.log(response);
      cb(null, response);
     },
    error: function(err) {  //失敗的時候執行一個function()帶回資料到cb
      cb(err);
    }
  })
}


GetData(function(err,data){
  if(err){
      console.log('錯誤')
  }else{
    var result = data;
    var $mCSB_1_container = $('#mCSB_1_container');
    for(var i=0; i<result.length; i++){
      $mCSB_1_container.append(rowData(result[i]));
    }
  }
});



function rowData(data){
  return '<ul>'+
		  	'<li class="date">' + data.doOrg + '</li>' +
			'<li class="time">' + data.servTime.substr(-11,11) + '</li>' +
			'<li class="place">' + data.informtel +'</li>' +
			'<li class="issue" >'+ '<a class="a" href="http://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q='+ data.lat + ',' + data.lng + '&z=16&output=embed&t=p" target="_blank">'+ data.informaddress + '</li>' +
		  '</ul>';

}


  $(function(){
        $(window).load(function(){
        $(".row").mCustomScrollbar({
       	   theme:"inset", // 設定捲軸樣式
           setWidth: 1000, // 設定寬度
           setHeight: 300,  // 設定高度
			 
        });
    });
});  


