/* =======================================================
   COURT MARRIAGE DELHI — GLOBAL JAVASCRIPT
   ======================================================= */

// ============ 3D PARTICLE CANVAS BACKGROUND ============
(function(){
  var canvas=document.getElementById('bgCanvas');
  if(!canvas) return;
  var ctx=canvas.getContext('2d');
  var W,H,particles=[];
  function resize(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight;}
  resize();
  window.addEventListener('resize',resize);
  var COLORS=['rgba(212,175,55,','rgba(200,41,58,','rgba(20,50,90,'];
  function Particle(){
    this.x=Math.random()*W;this.y=Math.random()*H;this.z=Math.random()*800+200;
    this.vx=(Math.random()-0.5)*0.3;this.vy=(Math.random()-0.5)*0.15;this.vz=(Math.random()-0.5)*0.5;
    this.r=Math.random()*2+0.5;this.col=COLORS[Math.floor(Math.random()*COLORS.length)];
    this.life=Math.random()*200+100;this.age=0;
  }
  Particle.prototype.update=function(){
    this.x+=this.vx;this.y+=this.vy;this.z+=this.vz;this.age++;
    if(this.x<0||this.x>W||this.y<0||this.y>H||this.z<0||this.z>1200||this.age>this.life){
      this.x=Math.random()*W;this.y=Math.random()*H;this.z=Math.random()*800+200;this.age=0;
    }
  };
  Particle.prototype.draw=function(){
    var fov=400,scale=fov/(fov+this.z);
    var px=this.x*scale+(W/2)*(1-scale);var py=this.y*scale+(H/2)*(1-scale);
    var sr=this.r*scale;var a=Math.max(0,1-(this.z/1200))*0.55;
    ctx.beginPath();ctx.arc(px,py,Math.max(0.2,sr),0,Math.PI*2);
    ctx.fillStyle=this.col+a+')';ctx.fill();
  };
  for(var i=0;i<90;i++) particles.push(new Particle());
  function drawConnections(){
    var proj=particles.map(function(p){
      var fov=400,scale=fov/(fov+p.z);
      return{x:p.x*scale+(W/2)*(1-scale),y:p.y*scale+(H/2)*(1-scale),a:Math.max(0,1-(p.z/1200))*0.28};
    });
    for(var i=0;i<proj.length;i++){
      for(var j=i+1;j<proj.length;j++){
        var dx=proj[i].x-proj[j].x,dy=proj[i].y-proj[j].y,d=Math.sqrt(dx*dx+dy*dy);
        if(d<95){var a=Math.min(proj[i].a,proj[j].a)*(1-d/95)*0.4;
          ctx.beginPath();ctx.moveTo(proj[i].x,proj[i].y);ctx.lineTo(proj[j].x,proj[j].y);
          ctx.strokeStyle='rgba(212,175,55,'+a+')';ctx.lineWidth=0.45;ctx.stroke();}
      }
    }
  }
  function animate(){
    ctx.clearRect(0,0,W,H);
    var grd=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,Math.max(W,H)/1.5);
    grd.addColorStop(0,'rgba(12,26,55,0.12)');grd.addColorStop(1,'rgba(4,8,15,0)');
    ctx.fillStyle=grd;ctx.fillRect(0,0,W,H);
    drawConnections();
    for(var i=0;i<particles.length;i++){particles[i].update();particles[i].draw();}
    requestAnimationFrame(animate);
  }
  animate();
  document.addEventListener('mousemove',function(e){
    particles.forEach(function(p){p.vx+=(e.clientX-W/2)*0.000004;p.vy+=(e.clientY-H/2)*0.000004;});
  });
})();

// ============ MOBILE NAV ============
(function(){
  var btn=document.getElementById('navMobileBtn');
  var drawer=document.getElementById('navMobileDrawer');
  var overlay=document.getElementById('navMobileOverlay');
  var close=document.getElementById('navMobileClose');
  function openNav(){if(drawer){drawer.classList.add('open');overlay.classList.add('open');document.body.style.overflow='hidden';}}
  function closeNav(){if(drawer){drawer.classList.remove('open');overlay.classList.remove('open');document.body.style.overflow='';}}
  if(btn) btn.addEventListener('click',openNav);
  if(close) close.addEventListener('click',closeNav);
  if(overlay) overlay.addEventListener('click',closeNav);
})();

// ============ IMAGE SLIDER ============
(function(){
  var track=document.getElementById('sliderTrack');
  if(!track) return;
  var slides=track.querySelectorAll('.slide');
  var totalSlides=slides.length;
  var currentSlide=0;
  var autoSlide;

  function buildDots(){
    var dots=document.getElementById('sliderDots');
    if(!dots) return;
    dots.innerHTML='';
    for(var i=0;i<totalSlides;i++){
      var d=document.createElement('button');
      d.className='dot-btn'+(i===0?' active':'');
      d.setAttribute('aria-label','Slide '+(i+1));
      d.onclick=(function(idx){return function(){goToSlide(idx);};})(i);
      dots.appendChild(d);
    }
  }
  window.goToSlide=function(n){
    currentSlide=(n+totalSlides)%totalSlides;
    track.style.transform='translateX(-'+currentSlide*100+'%)';
    document.querySelectorAll('.dot-btn').forEach(function(d,i){d.classList.toggle('active',i===currentSlide);});
    resetAuto();
  };
  window.nextSlide=function(){goToSlide(currentSlide+1);};
  window.prevSlide=function(){goToSlide(currentSlide-1);};
  function resetAuto(){clearInterval(autoSlide);autoSlide=setInterval(window.nextSlide,4200);}
  buildDots();
  autoSlide=setInterval(window.nextSlide,4200);

  var t=document.querySelector('.slider-wrap');
  if(t){
    var startX=0;
    t.addEventListener('touchstart',function(e){startX=e.touches[0].clientX;},{passive:true});
    t.addEventListener('touchend',function(e){
      var diff=startX-e.changedTouches[0].clientX;
      if(Math.abs(diff)>40){diff>0?window.nextSlide():window.prevSlide();}
    },{passive:true});
  }
})();

// ============ 3D CARD TILT ============
document.querySelectorAll('.svc-card,.why-card,.price-card,.review-card,.about-stat').forEach(function(card){
  card.addEventListener('mousemove',function(e){
    var r=card.getBoundingClientRect();
    var cx=(e.clientX-r.left)/r.width-0.5;var cy=(e.clientY-r.top)/r.height-0.5;
    card.style.transform='perspective(800px) rotateX('+(-cy*4)+'deg) rotateY('+(cx*4)+'deg) translateY(-5px)';
    card.style.transition='none';
  });
  card.addEventListener('mouseleave',function(){
    card.style.transform='';
    card.style.transition='all 0.42s cubic-bezier(0.34,1.56,0.64,1)';
  });
});

// ============ POPUP TIMER (HOME PAGE) ============
(function(){
  var popup=document.getElementById('popup');
  if(!popup) return;
  var pSec=15,pSecEl=document.getElementById('popup-sec'),pBarEl=document.getElementById('popup-bar');
  window.closePopup=function(){
    var p=document.getElementById('popup');
    if(p){p.style.opacity='0';p.style.transform='translateY(20px)';p.style.transition='all 0.35s ease';setTimeout(function(){p.remove();},350);}
  };
  var pTimer=setInterval(function(){
    pSec--;
    if(pSecEl) pSecEl.textContent=pSec;
    if(pBarEl) pBarEl.style.width=(pSec/15*100)+'%';
    if(pSec<=0){clearInterval(pTimer);window.closePopup();}
  },1000);
})();

// ============ FAQ ACCORDION ============
document.querySelectorAll('.faq-q').forEach(function(q){
  q.addEventListener('click',function(){
    var item=q.parentElement,isOpen=item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(function(i){i.classList.remove('open');});
    if(!isOpen) item.classList.add('open');
  });
});

// ============ LEAD FORM ============
(function(){
  var form=document.getElementById('leadForm');
  if(!form) return;
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var name=document.getElementById('f_name').value.trim();
    var phone=document.getElementById('f_phone').value.trim();
    var service=document.getElementById('f_service').value;
    var area=document.getElementById('f_area').value;
    var msg=(document.getElementById('f_msg')||{value:''}).value.trim();
    if(!name||!phone){alert('Naam aur phone number zaroori hai');return;}
    var wa='Namaste! Website se Free Consultation Request:\n\n'
      +'Name: '+name+'\n'
      +'Phone: '+phone+'\n'
      +'Service: '+service+'\n'
      +'Area: '+area
      +(msg?'\nMessage: '+msg:'')
      +'\n\nPlease contact me for same day court marriage. Thank you!';
    window.open('https://wa.me/919891343962?text='+encodeURIComponent(wa),'_blank');
  });
})();

// ============ SCROLL REVEAL ============
(function(){
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}
    });
  },{threshold:0.08});
  document.querySelectorAll('.reveal').forEach(function(el){obs.observe(el);});
})();

// ============ RIPPLE EFFECT ============
document.querySelectorAll('.btn-primary,.btn-gold,.svc-btn,.contact-btn,.price-btn,.submit-btn,.hdr-call,.cta-inline-call').forEach(function(btn){
  btn.addEventListener('click',function(e){
    var r=btn.getBoundingClientRect();
    var ripple=document.createElement('div');
    var size=Math.max(r.width,r.height)*2;
    ripple.style.cssText='position:absolute;width:'+size+'px;height:'+size+'px;top:'+(e.clientY-r.top-size/2)+'px;left:'+(e.clientX-r.left-size/2)+'px;background:rgba(255,255,255,0.22);border-radius:50%;pointer-events:none;animation:ripple 0.65s ease-out forwards;z-index:10;';
    if(getComputedStyle(btn).position==='static') btn.style.position='relative';
    btn.style.overflow='hidden';
    btn.appendChild(ripple);
    setTimeout(function(){ripple.remove();},700);
  });
});

// ============ SCROLL-CHIP HINT ============
(function(){
  var sc=document.querySelector('.services-scroll');
  if(sc){
    setTimeout(function(){
      sc.scrollTo({left:100,behavior:'smooth'});
      setTimeout(function(){sc.scrollTo({left:0,behavior:'smooth'});},1000);
    },2400);
  }
})();

// ============ AREA TAG SMOOTH SCROLL ============
document.querySelectorAll('.area-tag').forEach(function(a){
  a.addEventListener('click',function(e){
    if(a.getAttribute('href')==='#form'||a.getAttribute('href')==='#contact'){
      e.preventDefault();
      var target=document.getElementById('form')||document.getElementById('contact');
      if(target) target.scrollIntoView({behavior:'smooth'});
    }
  });
});

// ============ HEADER SHADOW ON SCROLL ============
(function(){
  var hdr=document.querySelector('.hdr');
  if(!hdr) return;
  window.addEventListener('scroll',function(){
    if(window.scrollY>20){hdr.style.boxShadow='0 4px 20px rgba(0,0,0,0.45)';}
    else{hdr.style.boxShadow='';}
  },{passive:true});
})();
