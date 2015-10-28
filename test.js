jQuery(document).ready(function($)
//jQuery(window).load(function()
{
  var frm = $('form[name="formSCO"]');
  if (frm.length >0)
  {
    if ($(this).complete)
    {
      //
    }
  }
  for (i = 0 ; i < document.images.length ; i++)
  {
    if (document.images[i].src.match("nextstep.png"))
    {
      //window.scroll(0,100);
      document.forms[2].elements[11].click();
      sco_check_login('ips_connect');
    }
  }
}
);
