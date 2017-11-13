/* contact form */
const URL = 'https://3381kqxhs7.execute-api.us-west-2.amazonaws.com/Production/message';

$('#contact-form').submit(function (event) {
  event.preventDefault();

  var data = {
    name: $('#name-input').val(),
    email: $('#email-input').val(),
    description: $('#description-input').val()
  };

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
  });
});

/* header animation */
function LogoBaffleOut() {
  var b = baffle('#logo').start().set({
    characters: '░█▓ ▓▒░<>/',
    speed: 60
  }).text(currentText => "Jared Dillard");

  setTimeout(function () {
    b.reveal(500);
  }, 500);
}

function LogoBaffleIn() {
  var names = ['farmer of bits', 'web developer'];
  var b = baffle('#logo').start().set({
    characters: '░█▓ ▓▒░<>/',
    speed: 60
  }).text(currentText => names[Math.floor(Math.random()*names.length)]);

  setTimeout(function () {
    b.reveal(500);
  }, 500);
}

window.onload=function(){LogoBaffleOut();};

document.getElementById('logo').onmouseover=function(){LogoBaffleIn();};
document.getElementById('logo').onmouseleave=function(){LogoBaffleOut();};

/* parallax on blog posts with cover image */
var parallaxImage = document.getElementById('ParallaxImage');
var windowScrolled;

window.addEventListener('scroll', function windowScroll() {
  windowScrolled = window.pageYOffset || document.documentElement.scrollTop;
  parallaxImage.style.transform = 'translate3d(0, ' + windowScrolled / 4 + 'px, 0)';
});
