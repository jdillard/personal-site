import u from 'umbrellajs';

/* contact form */

u('#contact-form').handle('submit', e => {
  axios.post('https://3381kqxhs7.execute-api.us-west-2.amazonaws.com/Production/message', {
    name: document.getElementById('name-input').value,
    email: document.getElementById('email-input').value,
    description: document.getElementById('description-input').value
  })
  .then(function (response) {
    alert('Message sent.');
  })
  .catch(function (error) {
    console.log(error);
  });
});