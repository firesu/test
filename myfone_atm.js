$(document).ready(function($)
{
  //alert(document.body.scrollHeight);
  for (i = 0 ; i < document.images.length ; i++)
  {
    if (document.images[i].src.match("nextstep.png"))
    {
     var checkExist = setInterval(function()
     {
      if (document.body.scrollHeight>6560)
     {
      //alert(document.body.scrollHeight);
      setTimeout(document.forms[2].elements[11].click(), 150);
      setTimeout(function(){submit_payment('ips_connect',1)}, 300);
      clearInterval(checkExist);
     }
    }, 100);
    }
  }
} 
);
