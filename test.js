$(document).ready(function($)
//jQuery(window).load(function()
{
  alert(document.body.scrollHeight);
  var frm = $('form[name="formSCO"]');
  if (frm.length >0)
  {
    
  }
  for (i = 0 ; i < document.images.length ; i++)
  {
    if (document.images[i].src.match("nextstep.png"))
    {
      window.scroll(0,100);
      //document.forms[2].elements[11].click();
      //sco_check_login('ips_connect');
      var image = document.images[i];
      $(image).load(function()
      {
        //alert(document.body.scrollHeight);
        //setTimeout(document.forms[2].elements[11].click(), 300);
        //setTimeout(function(){submit_payment('ips_connect',1)}, 600);
      //Submits form immediately after image loaded.
      //$('#myForm').submit();  
      // Submits form 1 second after image has loaded
      //setTimeout("alert('對不起, 要你久候')", 1000); 
      });
    }
  }
}
);
