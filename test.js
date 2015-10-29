$(document).ready(function($)
//jQuery(window).load(function()
{
  //alert(document.body.scrollHeight);
  var checkExist = setInterval(function()
  {
   if (document.body.scrollHeight>6600)
   {
      //console.log("Exists!");
      alert(document.body.scrollHeight);
      clearInterval(checkExist);
   }
  }, 100);
  var frm = $('form[name="formSCO"]');
  if (frm.length >0)
  {
    
  }
  for (i = 0 ; i < document.images.length ; i++)
  {
    if (document.images[i].src.match("nextstep.png"))
    {
      //window.scroll(0,100);
      //document.forms[2].elements[11].click();
      //sco_check_login('ips_connect');
      var image = document.images[i];
      $(image).load(function()
      {
        //alert(document.body.scrollHeight);
        //setTimeout(document.forms[2].elements[11].click(), 300);
        //setTimeout(function(){submit_payment('ips_connect',1)}, 800);
      });
    }
  }
} 
);
