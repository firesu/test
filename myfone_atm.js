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
        var checkExist1 = setInterval(function()
        {
            if (document.forms[2].elements[11].checked)
            {
              $('#pop_oper img').each(function() {
                //$(this).click();
                setTimeout(function(){submit_payment('ips_connect',1)}, 150);
              });
             clearInterval(checkExist1);
            }
        }, 100);
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
        var div = $('#pop_oper');
        //alert(div.outerHeight());
       var checkExist = setInterval(function()
       {
        //if (document.body.scrollHeight>6580)
        //if ($("#radio").length > 0)
        if (div.outerHeight() > 30)
        {
          //alert(document.body.scrollHeight);
          setTimeout(document.forms[2].elements[11].click(), 100);
         
          var checkExist1 = setInterval(function()
          {
            if (document.forms[2].elements[11].checked)
           {
             setTimeout(function(){submit_payment('ips_connect',1)}, 100);
             clearInterval(checkExist1);
           }
          }, 100);
      
          //setTimeout(function(){submit_payment('ips_connect',1)}, 450);
          clearInterval(checkExist);
        }
       }, 100);
      }
    }
    
  }
} 
);
