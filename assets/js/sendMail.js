const btn = document.getElementById('button');

document
  .getElementById('contact-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'neartalent';
    const templateID = 'neartalent';

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = 'Send Email';
        alert('Sent!');
      },
      (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      }
    );
  });
