const shareBtn = document.getElementById('shareBtn');
const shareMenu = document.getElementById('shareMenu');

function openMenu(){
  shareBtn.setAttribute('aria-expanded','true');
  shareMenu.classList.add('open');
  shareMenu.setAttribute('aria-hidden','false');
}
function closeMenu(){
  shareBtn.setAttribute('aria-expanded','false');
  shareMenu.classList.remove('open');
  shareMenu.setAttribute('aria-hidden','true');
}

shareBtn.addEventListener('click', (e) => {
  const expanded = shareBtn.getAttribute('aria-expanded') === 'true';
  expanded ? closeMenu() : openMenu();
  e.stopPropagation();
});

document.addEventListener('click', (e) => {
  if(!e.target.closest('.share')) closeMenu();
});

document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeMenu();
});