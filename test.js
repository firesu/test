//jQuery(document).ready(function($)
jQuery(window).load(function($)
{
  if ($("img").attr("src")=="images/nextstep.png")
  {
    window.scroll(0,100);
    alert("123");
  }
  var frm = $('form[name="formSCO"]');
  if (frm.length >0)
  {
    if ($(this).complete)
    {
      alert("formSCO 完成");
    }
  }
  for (i = 0 ; i < document.images.length ; i++)
  {
    if (document.images[i].src.match("nextstep.png"))
    {
      window.scroll(0,100);
      document.forms[2].elements[5].click();
    }
  }
}
);
