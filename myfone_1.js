$(document).ready(function($)
{
  //alert(document.body.scrollHeight);
  var checkExist = setInterval(function()
  {
   if (document.body.scrollHeight>6600)
   {
      //alert(document.body.scrollHeight);
      setTimeout(document.forms[2].elements[11].click(), 300);
      setTimeout(function(){submit_payment('ips_connect',1)}, 800);
      clearInterval(checkExist);
   }
  }, 100);
} 
);
