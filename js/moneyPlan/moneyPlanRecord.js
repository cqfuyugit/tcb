require(['../config'],function(config) {

	require(['jquery','common','fastclick','mui'], function ($, common,fastclick,mui) {

        var ipAdress = common.ipAdress;

        var tokenId = sessionStorage.getItem("tokenId");

        var moneyPlanRecord = {

			init:function(){

				this.recordInit();

			},
			recordInit:function(){

				var path = window.location.search;

				path = path.slice(1);

				path = common.parseUrl(path);

				console.log(path);
                
                 $('.asidemenu').on('click',function(){

                   window.location.href="../home/index.html?companyId="+path.companyId+"&deptId="+path.deptId+"&btmIndex=0";
                  
                 })

         $.ajax({

                 	url:ipAdress+'/weixin/oaDoc/view',

                 	data:{
                   
                      oaDocId:path.oaDocId
                 	},
                 	type:'POST',

                 	dataType:'json',

                 	success:function(res){
                      
                     console.log(res);

                     if(res.status == 200){

                        var picList = res.data.oaDocPicList,picHtml="",fileList= res.data.oaDocFileList,fileHtml="";

                             $('.company').html(res.data.wxOaDoc.companyName);               
                           
                             $('.deparmtent').html(res.data.wxOaDoc.deptName);

                             $('.people').html(res.data.wxOaDoc.userName);

                             $('.payee').html(res.data.wxOaDoc.payee);

                             $('.payable').html(res.data.wxOaDoc.payable);

                             $('.actualMoney').html(res.data.wxOaDoc.actualMoney);

                             $('.paymentDetail').html(res.data.wxOaDoc.paymentDetail);

                           if(res.data.wxOaDoc.applyType==60011003){
                                
                                $('#stateIcon').addClass('checkIcon');
                                 
                             }
                          else if(res.data.wxOaDoc.applyType==60011001){

                                $('#stateIcon').addClass('sucessIcon');
                          }
                          else{

                            $('#stateIcon').addClass('failIcon');
                          }

                           for(var i = 0;i<picList.length;i++){

                             picHtml += ' <li>'+
                                            '    <div>'+
                                            '       <img src="'+picList[i].PIC_PATH+'" alt="" title="">'+
                                            '    </div>'+
                                           ' </li>';

                             }

                            $('#picList').html(picHtml);

                            for(var i =0;i<fileList.length;i++){

                           fileHtml += '<li><a href="'+fileList[i].PIC_PATH+'">'+fileList[i].FILE_NAME+'</a></li>'

                           }
                           $('#fileList').html(fileHtml);
 
                     }
                      
                 	}
         })
			}
		}
		moneyPlanRecord.init();

	})
})	