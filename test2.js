$(document).ready(function($)
//jQuery(window).load(function()
{
  var frm = $('form[name="contact-form"]')
  if (frm.length>0)
  {
    var div = $('#pop_oper');
    //alert(div.outerHeight());
     var checkExist = setInterval(function()
     {
      if (div.outerHeight()>70)  //(document.body.scrollHeight>1000)
     {
      //alert('123');
      //setTimeout(function(){doSubmit(frm,3)}, 100);
      //$("#resultForm").submit();
      div.children('input').each(function () {
       alert(this.src); // "this" is the current element in the loop
       //this.click();
      });
      clearInterval(checkExist);
     }
    }, 100);
  }
} 
);
