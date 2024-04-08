const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length; i++) {
  const btn = buttons[i]

  btn.addEventListener('click', function(event) {
    event.target.classList.toggle('active');
  });
}