$(document).ready(function($)
//jQuery(window).load(function()
{
  var frm = $('form[name="contact-form"]')
  for (i = 0 ; i < frm.images.length ; i++)
  {
    alert(document.images[i].src);
  }
  for (i = 0 ; i < document.images.length ; i++)
  {
    alert(document.images[i].src);
    if (document.images[i].src.match("complete_1.png"))
    {
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
