emailjs.init('user_uxSBgp47fOtfj5HMBjzl5');

function loadCaptcha() {
  let captchaContainer = null;
  const sendBtn = document.getElementById('sendBtn');
  captchaContainer = grecaptcha.render('captcha_container', {
    sitekey: '6LcFJ4siAAAAAI8cT8CzL44CwHpx6VsXVII5Fl1w',
    callback: function (response) {
      sendBtn.innerHTML =
        "<input type='submit' class='btn btn-primary btn-send' value='Send' id ='send-button'>";
    },
  });
}

function submit() {
  document.getElementById('contact-form').submit();
}

document
  .getElementById('contact-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const btn = document.getElementById('send-button');
    btn.value = 'Sending...';

    emailjs.sendForm('neartalent', 'neartalent', this).then(
      () => {
        btn.value = 'Success!';
        btn.setAttribute('disabled', '');
        alert(
          'Message sent succesfully. We will answer you soon. Thank you!',
          'success'
        );
      },
      (err) => {
        btn.value = 'Send Email';
        console.log(JSON.stringify(err));
      }
    );
  });

const alert = (message, type) => {
  const alertPlaceholder = document.getElementById('notification');
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>',
  ].join('');

  alertPlaceholder.append(wrapper);
};
