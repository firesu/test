$(document).ready(function($)
//jQuery(window).load(function()
{
  var frm = $('form[name="contact-form"]')
  if (frm.length>0)
  {
     var checkExist = setInterval(function()
     {
      if (document.body.scrollHeight>1000)
     {
      //alert('123');
      //setTimeout(function(){doSubmit(frm,3)}, 100);
      //$("#resultForm").submit();
      var div = $('#pop_oper');
      alert(div.height);
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
