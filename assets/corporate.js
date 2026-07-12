(function(){
  const nav=document.querySelector('.site-nav');
  const toggle=document.querySelector('.menu-toggle');
  if(nav&&toggle){
    toggle.addEventListener('click',()=>{
      const open=nav.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded',String(open));
    });
  }
  document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{
    if(nav){nav.classList.remove('menu-open');}
    if(toggle){toggle.setAttribute('aria-expanded','false');}
  }));
  const items=document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){items.forEach(i=>i.classList.add('is-visible'));return;}
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
  }),{threshold:.08,rootMargin:'0px 0px -30px'});
  items.forEach(i=>observer.observe(i));
})();
