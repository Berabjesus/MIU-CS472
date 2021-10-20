$(function(){
  const success = (data) => {
    $('#count').text(data)
  }
  const failure = (xhr, status, exception) => {
    console.error(exception)
  }
  $.get("/cartNumber").done(success).fail(failure);

  $('#form').submit(function (e) { 
    e.preventDefault();
    let data = {
      name : $('#itemName').text(),
      price : $('#itemPrice').text()
    }
    $.post({
      url: "/addToCart",
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8"
    }).done(success)
      .fail(failure);
  });

});