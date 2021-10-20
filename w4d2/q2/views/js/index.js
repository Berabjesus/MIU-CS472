$(function () {
  $('#text').keydown(function (e) { 
    
  });
 $("#form").submit(function (e) { 
    e.preventDefault();
    $.get("/8ball").done(success).fail(failed)
    ;
  });
  
  const success = (data) => {
    $("#text").val(data).select()
  }

  const failed = (xhr, status, exception) => {
    $("#text").val(':( Sorry 8ball is not working');
    console.error(exception);
  }
});