$(document).ready(function($)
//jQuery(window).load(function()
{
  var frm = $('form[name="contact-form"]')
  if (frm.length>0)
  {
     var checkExist = setInterval(function()
     {
      if (document.body.scrollHeight>1000)
     {
      //alert('123');
      //setTimeout(function(){doSubmit(frm,3)}, 100);
      //$("#contact-form").submit();
      alert(frm.document.images[0].src);
      clearInterval(checkExist);
     }
    }, 100);
  }
//  for (i = 0 ; i < document.images.length ; i++)
//  {
//    //alert(document.images[i].src);
//    if (document.images[i].src.match("complete_1.png"))
//    {
//      //alert(document.body.scrollHeight);
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
