$(document).ready(function($)
{
  var frm = $('form[name="formSCO"]')
  if (frm.length>0)
  {
    alert('find form');
    var div = $('#pop_oper');
    div.outerHeight();
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
