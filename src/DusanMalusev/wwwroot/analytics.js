function gtag() {
  dataLayer.push(arguments);
}

document.addEventListener('DOMContentLoaded', () => {
  window.dataLayer = window.dataLayer || [];

  gtag('js', new Date());

  const config = {
    currency: 'EUR',
    transport_type: 'beacon',
  };

  gtag('config', 'UA-187169857-1', config);

  window.grecaptcha = grecaptcha;
});