$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/UsmanShahid9585.json',
    dataType: 'jsonp',
    success: function(response) {
      addCourses(response.courses.completed);
    }
  });
});

function addCourses(courses) {
  var $badges = $('#badges');
  courses.forEach(function(course) {
    var $course = $('<div />', {
      'class': 'course'
    }).appendTo($badges);
  })
}
