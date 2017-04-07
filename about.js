$(document).ready(function() {
  var first = $('#first-main');
  var second = $('#second-main');
  setTimeout(fadeIn(first, 1500), 900);
  setTimeout(fadeIn(second, 2000), 1800);
  attachlistener()
})


function fadeIn(obj, time) {
  obj.animate({
    opacity: 1
  }, time)
}

function attachlistener() {
  $(document).on('scroll', function() {
    var dFromBottom = calculateFromBottom();
    var dFromTop = calculateFromTop();
    var thirdMain = $('#third-main');

    if (dFromBottom < dFromTop) {
      fadeIn(thirdMain, 2000);
    };
  });
}


function calculateFromBottom() {
  return Math.floor($(document).height() - $(document).scrollTop())
}

function calculateFromTop() {
  return $('#first-main').height() + $('#second-main').height() + 200
}