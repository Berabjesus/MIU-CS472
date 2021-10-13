$(document).ready(function () {
  let interval = null;
  let width = 100;
  let growthAmount = 12;
  let intervalChange = 250;
  let numberOfCircles = 1;
  let elements = $();

  $('#width').on('input', function (e) {
    e.preventDefault();
    width = $(this).val();
  });

  $('#growthAmount').on('input', function (e) {
    e.preventDefault();
    growthAmount = $(this).val();
  });

  $('#interval').on('input', function (e) {
    e.preventDefault();
    intervalChange = $(this).val();
  });

  $('#circlesValue').on('input', function (e) {
    e.preventDefault();
    numberOfCircles = $(this).val();
  });

  $('#start').click(function (e) {
    e.preventDefault();
    $(this).text($(this).text() === 'start' ? 'stop' : 'start')
    numberOfCircles = $('#circlesValue').val()
    if (interval === null) {
      render(width);
      startInterval();
    } else {
      endInterval();
    }
  })

  function startInterval() {
    let newDimension = parseInt(width)
    interval = setInterval(() => {
      newDimension += parseInt(growthAmount)
      $('.circle').each(function () {
        $(this).width(newDimension)
        $(this).height(newDimension)
      });
    }, intervalChange);
  }

  function endInterval() {
    clearInterval(interval)
    interval = null;
    numberOfCircles = 1
    $('#circlesValue').val('')
  }

  function render(width) {
    if (numberOfCircles <= 0) {
      $('#container').append(elements)
      return;
    }
    let randomX = Math.floor(Math.random() * ($(window).width() / 2 + width)) + 1
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    randomColor = randomColor === "ffffff" ? "000000" : randomColor;
    let circle = $("<div>", {
      "class": "circle",
      "css": {
        "left": `${randomX}px`,
        "height": width,
        "width": width,
        "background-color": `#${randomColor}`
      },
      "click": function () {
        $(this).remove();
      },
      "mouseover": function () {
        $(this).fadeTo(500, 0.0)
      },
      "mouseleave": function () {
        $(this).fadeTo(500, 1.0)
      }
    });
    elements = elements.add(circle);
    numberOfCircles--;
    render(width)
  }
})