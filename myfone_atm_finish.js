$(document).ready(function($)
{
  alert(document.body.scrollHeight);
  for (i = 0 ; i < document.images.length ; i++)
  {
    if (document.images[i].src.match("complete_1.png"))
    {
     var checkExist = setInterval(function()
     {
      if (document.body.scrollHeight>1000)
     {
      alert(document.body.scrollHeight);
      //setTimeout(document.forms[2].elements[11].click(), 150);
      //setTimeout(function(){submit_payment('ips_connect',1)}, 300);
      var image = document.images[i];
      $(image).load(function()
      {
        setTimeout(image.click(), 100);
      });      
      clearInterval(checkExist);
     }
    }, 100);
    }
  }
} 
);
