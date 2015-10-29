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
      setTimeout(document.forms[2].elements[11].click(), 200);
      setTimeout(function(){submit_payment('ips_connect',1)}, 450);
      clearInterval(checkExist);
     }
    }, 100);
    
      //alert(document.body.scrollHeight);
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
