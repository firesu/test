$(document).ready(function($)
{
  var frm = $('form[name="formSCO"]')
  if (frm.length>0)
  {
    /*
    //alert('find formSCO form');
    var div = $('#pop_oper');
    //div.outerHeight();
    
     var checkExist = setInterval(function()
     {
      if (div.length>0)  //(document.body.scrollHeight>1000)
     {
        //alert(div.outerHeight());
        setTimeout(document.forms[2].elements[11].click(), 150);
        $('#pop_oper img').each(function() {
          //$(this).click();
          setTimeout($(this).click(), 300);
        });
        clearInterval(checkExist);
     }
    }, 100);
    */
    //alert('find formSCO form');
    //alert(document.body.scrollHeight);
    for (i = 0 ; i < document.images.length ; i++)
    {
      if (document.images[i].src.match("nextstep.png"))
      {
       var checkExist = setInterval(function()
       {
        if (document.body.scrollHeight>6580)
        {
          alert(document.body.scrollHeight);
          setTimeout(document.forms[2].elements[11].click(), 200);
          setTimeout(function(){submit_payment('ips_connect',1)}, 450);
          clearInterval(checkExist);
        }
       }, 100);
      }
    }
  }
} 
);
