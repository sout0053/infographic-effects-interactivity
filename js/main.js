var $fall = $('.fall');
var $calories = $('.calories');
var $know = $('.know');
var $moderation = $('.moderation');

$('.fall').on('click', function (e) {
  $('.bottle').addClass('bottle-fall');
});

$calories.waypoint(function (direction) {
  if (direction == 'down') {
    $calories.addClass('calories-svg-2-animate');
  } else {
    $calories.removeClass('calories-svg-2-animate');
  }
}, {offset: '50%'});

$know.waypoint(function (direction) {
  if (direction == 'down') {
    $know.addClass('know-animate');
  } else {
    $know.removeClass('know-animate');
  }
}, {offset: '50%'});

$moderation.waypoint(function (direction) {
  if (direction == 'down') {
    $moderation.addClass('moderation-animate');
  } else {
    $moderation.removeClass('moderation-animate');
  }
}, {offset: '70%'});
