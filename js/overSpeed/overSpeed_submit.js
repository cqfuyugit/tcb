require(['../config'],function(config) {

	require(['jquery','common','fastclick'], function ($, common,fastclick) {

		var overSpeedSubmit = {
           
             init:function(){

             	this.param();
                
             },
             param:function(){

                 var path =  window.location.search;

                 path = path.slice(1);

                 path = common.parseUrl(path);

                 console.log(path);

                 $('.asidemenu').on('click',function(){

                      window.location.href="../home/index.html?companyId="+path.companyId+"&deptId="+path.deptId+"&btmIndex=0";
                 })

                 if(path.formType=='csgl'){

                   $('#successDetail').attr('href','overSpeed_record.html?oaDocId='+path.oaDocId+'&companyId='+path.companyId+'&deptId='+path.deptId);

                 }

                 else if(path.formType=='pzgl'){

                    $('#successDetail').attr('href','../license/license_record.html?oaDocId='+path.oaDocId+'&companyId='+path.companyId+'&deptId='+path.deptId);
                    
                 }

                 else if(path.formType=='cljc'){

                    $('#successDetail').attr('href','../inspection/inspection_record.html?oaDocId='+path.oaDocId+'&companyId='+path.companyId+'&deptId='+path.deptId);
                    
                 }

                 else if(path.formType=='zjjh'){
                    $('#successDetail').attr('href','../moneyPlan/moneyPlan_record.html?oaDocId='+path.oaDocId+'&companyId='+path.companyId+'&deptId='+path.deptId);
                 }

                  else if(path.formType=='jbjk'){
                    $('#successDetail').attr('href','../basicLoan/basicLoan_record.html?oaDocId='+path.oaDocId+'&companyId='+path.companyId+'&deptId='+path.deptId);
                 }
                 else if(path.formType=='bx'){
                    $('#successDetail').attr('href','../reimbursement/reimbursement_record.html?oaDocId='+path.oaDocId+'&companyId='+path.companyId+'&deptId='+path.deptId);
                 }
                 else if(path.formType=='sgck'){
                    $('#successDetail').attr('href','../accidentSurvey/accidentSurvey_record.html?oaDocId='+path.oaDocId+'&companyId='+path.companyId+'&deptId='+path.deptId);
                 }
                 
                 else if(path.formType=='shfjk'){
                    $('#successDetail').attr('href','../liveLoan/liveLoan_record.html?oaDocId='+path.oaDocId+'&companyId='+path.companyId+'&deptId='+path.deptId);
                 }

                 else if(path.formType=='sgjk'){
                    $('#successDetail').attr('href','../accidentLoan/accidentLoan_record.html?oaDocId='+path.oaDocId+'&companyId='+path.companyId+'&deptId='+path.deptId);
                 }

                else if(path.formType=='sckc'){
                    $('#successDetail').attr('href','../productionDeduction/productionDeduction_record.html?oaDocId='+path.oaDocId+'&companyId='+path.companyId+'&deptId='+path.deptId);
                 }

                else if(path.formType=='scjl'){
                    $('#successDetail').attr('href','../productionReward/productionReward_record.html?oaDocId='+path.oaDocId+'&companyId='+path.companyId+'&deptId='+path.deptId);
                 }
                 
                 else if(path.formType=='scbz'){
                    $('#successDetail').attr('href','../productionSubsidy/productionSubsidy_record.html?oaDocId='+path.oaDocId+'&companyId='+path.companyId+'&deptId='+path.deptId);
                 }

                 else if(path.formType=='tysq'){
                    $('#successDetail').attr('href','../applicationOutage/applicationOutage_record.html?oaDocId='+path.oaDocId+'&companyId='+path.companyId+'&deptId='+path.deptId);
                 }




                  else if(path.formType=='fljsq'){// 福利金申请

                    $('#successDetail').attr('href','../welfare/welfare_record.html?oaDocId='+path.oaDocId+'&companyId='+path.companyId+'&deptId='+path.deptId);
                    
                 }
                 
                  else if(path.formType=='qksm'){// 情况说明

                    $('#successDetail').attr('href','../situation/situation_record.html?oaDocId='+path.oaDocId+'&companyId='+path.companyId+'&deptId='+path.deptId);
                    
                 }
                  
                   else if(path.formType=='ygjl'){// 员工奖励

                    $('#successDetail').attr('href','../staffreward/staffreward_record.html?oaDocId='+path.oaDocId+'&companyId='+path.companyId+'&deptId='+path.deptId);
                    
                 }
                   
                   else if(path.formType=='yzzz'){// 印章证照

                    $('#successDetail').attr('href','../seallicense/seallicense_record.html?oaDocId='+path.oaDocId+'&companyId='+path.companyId+'&deptId='+path.deptId);
                    
                 }
                   
                   else if(path.formType=='scwzcg'){// 生产物资采购

                    $('#successDetail').attr('href','../productMaterials/productMaterials_record.html?oaDocId='+path.oaDocId+'&companyId='+path.companyId+'&deptId='+path.deptId);
                    
                 }
                 
                  else if(path.formType=='dagl'){// 档案管理

                    $('#successDetail').attr('href','../archives/archives_record.html?oaDocId='+path.oaDocId+'&companyId='+path.companyId+'&deptId='+path.deptId);
                    
                 }
                  
                  else if(path.formType=='xzwzcg'){// 行政物资采购

                    $('#successDetail').attr('href','../adminMaterials/adminMaterials_record.html?oaDocId='+path.oaDocId+'&companyId='+path.companyId+'&deptId='+path.deptId);
                    
                 }





                 
                 else if(path.formType=='yctj'){

                    $('#successDetail').attr('href','../abnormallySubmission/abnormallySubmit_record.html?oaDocId='+path.oaDocId+'&companyId='+path.companyId+'&deptId='+path.deptId);
                 }

                 if($('#gohome_fail')){

                 	$('#gohome_fail').attr('href','../home/index.html?companyId='+path.companyId+'&deptId='+path.deptId+'&btmIndex=0');

                 }

                 if($('#gohome_success')){

                 	$('#gohome_success').attr('href','../home/index.html?companyId='+path.companyId+'&deptId='+path.deptId+'&btmIndex=0');

                 }
             } 
		}
		overSpeedSubmit.init();
    })
})