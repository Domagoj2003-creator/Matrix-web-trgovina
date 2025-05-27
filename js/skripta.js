document.addEventListener('DOMContentLoaded', function () {
  const popup = document.getElementById('cookie-popup');
  const acceptBtn = document.getElementById('accept-btn');
  const rejectBtn = document.getElementById('reject-btn');

  // Provjeri je li korisnik već dao odgovor
  const userChoice = localStorage.getItem('cookieConsent');

  if (userChoice) {
    popup.style.display = 'none';
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    popup.style.display = 'none';
  });

  rejectBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'rejected');
    popup.style.display = 'none';
  });
});
