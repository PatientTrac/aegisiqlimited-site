(function(){
  'use strict';

  const nav=document.querySelector('.home-nav');
  if(nav){
    const syncNav=()=>nav.classList.toggle('is-scrolled',window.scrollY>18);
    syncNav();
    window.addEventListener('scroll',syncNav,{passive:true});
  }

  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer=window.matchMedia('(pointer: fine)').matches;
  const root=document.querySelector('[data-tilt-root]');
  const card=document.querySelector('[data-tilt-card]');

  if(root&&card&&!reduced&&finePointer){
    const onMove=(event)=>{
      const rect=root.getBoundingClientRect();
      const x=(event.clientX-rect.left)/rect.width-.5;
      const y=(event.clientY-rect.top)/rect.height-.5;
      card.style.transform=`rotateX(${(-y*3.2).toFixed(2)}deg) rotateY(${(x*4.2).toFixed(2)}deg) translateZ(0)`;
    };
    const reset=()=>{card.style.transform='rotateX(0deg) rotateY(0deg) translateZ(0)';};
    root.addEventListener('pointermove',onMove);
    root.addEventListener('pointerleave',reset);
  }

  const dropdown=document.querySelector('.home-nav .nav-dropdown');
  if(dropdown){
    document.addEventListener('pointerdown',(event)=>{
      if(dropdown.open&&!dropdown.contains(event.target)){dropdown.open=false;}
    });
    dropdown.addEventListener('keydown',(event)=>{
      if(event.key==='Escape'){
        dropdown.open=false;
        const summary=dropdown.querySelector('summary');
        if(summary){summary.focus();}
      }
    });
  }
})();
