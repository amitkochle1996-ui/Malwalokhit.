// Language toggle (swap to your alternate pages if you have English versions)
function setLanguage(lang){
  if(lang === 'en'){
    // Example: redirect to English homepage (create if needed)
    window.location.href = 'en/index.html';
  }else{
    window.location.href = 'index.html';
  }
}

// Smooth scroll for on-page anchors (if any)
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const target = document.querySelector(a.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth'});
    }
  });
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const onScroll = ()=>{
  const winH = window.innerHeight;
  reveals.forEach(el=>{
    const rect = el.getBoundingClientRect();
    if(rect.top < winH - 100){
      el.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', onScroll);
window.addEventListener('load', ()=>{
  // initialize starting state and trigger once
  onScroll();
});

// Optional: small hover ripple for buttons
document.querySelectorAll('.cta-button').forEach(btn=>{
  btn.addEventListener('mouseenter', ()=>btn.style.boxShadow='0 8px 20px rgba(243,156,18,.35)');
  btn.addEventListener('mouseleave', ()=>btn.style.boxShadow='none');
});

