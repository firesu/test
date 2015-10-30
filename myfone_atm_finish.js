$(function()
{
  var frm = $('form[name="contact-form"]')
  if (frm.length>0)
  {
     var div = $('#pop_oper');
     var checkExist = setInterval(function()
     {
      //if (document.body.scrollHeight>1000)
      if (div.length>0)
     {
      $('#pop_oper').children('input').each(function () {
       //alert(this.src); // "this" is the current element in the loop
       //this.click();
       setTimeout(this.click(), 100);
      });
      clearInterval(checkExist);
     }
    }, 50);
  }
} 
);
