$(document).ready(function($)
{
  var frm = $('form[name="contact-form"]')
  if (frm.length>0)
  {
     var checkExist = setInterval(function()
     {
      if (document.body.scrollHeight>1000)
     {
      $('#pop_oper').children('input').each(function () {
       //alert(this.src); // "this" is the current element in the loop
       this.click();
      });
      clearInterval(checkExist);
     }
    }, 100);
  }
} 
);
