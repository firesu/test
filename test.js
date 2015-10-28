jQuery(document).ready(function($)
{
  if ($("img").attr("src")=="images/nextstep.png")
  {
    window.scroll(0,100);
    alert("123");
  }
  var frm = $('form[name="formSCO"]');
  if (frm.length >0)
  {
    alert("formSCO存在");
  }
});
