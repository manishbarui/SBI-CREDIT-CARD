document.querySelectorAll('.show-cvv, .hide-cvv').forEach(elem =>
  elem.addEventListener('click', () => document.querySelector('.card').classList.toggle('show-backside')))