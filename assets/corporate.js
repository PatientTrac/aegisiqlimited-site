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
  // Contact form → Netlify Forms via AJAX (progressive enhancement; the plain
  // POST still works if JS is unavailable).
  const cf=document.querySelector('form[name="contact"]');
  if(cf){
    cf.addEventListener('submit',async(e)=>{
      e.preventDefault();
      const status=cf.querySelector('[data-contact-status]');
      const btn=cf.querySelector('button[type="submit"]');
      if(btn){btn.disabled=true;}
      try{
        const res=await fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(new FormData(cf)).toString()});
        if(!res.ok)throw new Error();
        cf.reset();
        if(status){status.hidden=false;status.textContent="Thanks — we've received your request and will be in touch shortly.";status.className='contact-note is-ok';}
      }catch(err){
        if(status){status.hidden=false;status.textContent='Something went wrong. Please email sales@aegisiqfintech.com.';status.className='contact-note is-err';}
      }finally{if(btn){btn.disabled=false;}}
    });
  }
  const items=document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){items.forEach(i=>i.classList.add('is-visible'));return;}
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
  }),{threshold:.08,rootMargin:'0px 0px -30px'});
  items.forEach(i=>observer.observe(i));
})();
