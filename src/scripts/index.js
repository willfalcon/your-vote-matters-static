import polyfills from './polyfills';
polyfills();

const links = document.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', e => {
    gtag('event', 'Link Click', {
      value: link.href,
      label: link.href,
    });
    console.log(link.href);
  });
})