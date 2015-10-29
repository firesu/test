$(document).ready(function($)
//jQuery(window).load(function()
{
  var frm = $('form[name="formSCO"]');
  if (frm.length >0)
  {
    alert(document.body.scrollHeight);
  }
  for (i = 0 ; i < document.images.length ; i++)
  {
    if (document.images[i].src.match("nextstep.png"))
    {
      window.scroll(0,100);
      //document.forms[2].elements[11].click();
      //sco_check_login('ips_connect');
      alert(document.body.scrollHeight);
      var image = document.images[i];
      $(image).load(function()
      {
        
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
