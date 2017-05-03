var URL = 'https://3381kqxhs7.execute-api.us-west-2.amazonaws.com/Production/message'

$('#contact-form').submit(function (event) {
  event.preventDefault()

  var data = {
    name: $('#name-input').val(),
    email: $('#email-input').val(),
    description: $('#description-input').val()
  }

  $.ajax({
    type: 'POST',
    url: URL,
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(data),
    success: function () {
      alert('success');
    },
    error: function () {
      alert('fail');
      console.log(data);
    }
  })
})

var parallaxImage = document.getElementById('ParallaxImage');
var windowScrolled;

window.addEventListener('scroll', function windowScroll() {
  windowScrolled = window.pageYOffset || document.documentElement.scrollTop;
  parallaxImage.style.transform = 'translate3d(0, ' + windowScrolled / 4 + 'px, 0)';
});
