$(document).ready(function($)
{
  var frm = $('form[name="formSCO"]')
  if (frm.length>0)
  {
    alert('find form');
    var div = $('#pop_oper');
    //div.outerHeight();
    
     var checkExist = setInterval(function()
     {
      if (div.length>0)  //(document.body.scrollHeight>1000)
     {
        $('#pop_oper .row.selected src').each(function() {
        alert($(this).attr('src'))
        });
      //alert('123');
      //setTimeout(function(){doSubmit(frm,3)}, 100);
      //$("#resultForm").submit();
      //div.children('input').each(function () {
      // alert(this.src); // "this" is the current element in the loop
       //this.click();
      //});
      alert(div.outerHeight());
      clearInterval(checkExist);
     }
    }, 100);
  }
  
//  for (i = 0 ; i < document.images.length ; i++)
//  {
//    if (document.images[i].src.match("nextstep.png"))
//    {
//      alert(document.body.scrollHeight);
//      var image = document.images[i];
//      $(image).load(function()
//      {
//        //alert(document.body.scrollHeight);
//        //setTimeout(document.forms[2].elements[11].click(), 300);
//        //setTimeout(function(){submit_payment('ips_connect',1)}, 800);
//      });
//    }
//  }
} 
);
