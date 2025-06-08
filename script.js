
document.querySelectorAll('.item').forEach(el => {
  el.addEventListener('click', () => {
    el.style.display = 'none';
  });
});
