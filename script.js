// ===============================
// CLOCK
// ===============================

const clock = document.getElementById("clock");
const date = document.getElementById("date");

function updateClock(){

const now = new Date();

clock.innerHTML = now.toLocaleTimeString("id-ID");

date.innerHTML = now.toLocaleDateString("id-ID",{

weekday:"long",

day:"numeric",

month:"long",

year:"numeric"

});

}

updateClock();

setInterval(updateClock,1000);

// ===============================
// PARTICLES
// ===============================

const particles = document.getElementById("particles");

for(let i=0;i<80;i++){

const p=document.createElement("div");

p.className="spark";

p.style.left=Math.random()*100+"vw";

p.style.animationDuration=(5+Math.random()*8)+"s";

p.style.animationDelay=Math.random()*5+"s";

p.style.opacity=Math.random();

particles.appendChild(p);

}

// ===============================
// MUSIC
// ===============================

const music=document.getElementById("music");

const enter=document.getElementById("enter");

enter.onclick=()=>{

music.play().catch(()=>{});

enter.innerHTML="WELCOME";

enter.style.transform="scale(.95)";

setTimeout(()=>{

enter.style.transform="scale(1)";

},300);

}

// ===============================
// PARALLAX
// ===============================

document.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*20;

const y=(e.clientY/window.innerHeight-.5)*20;

document.querySelector(".hero").style.transform=

`translate(calc(-50% + ${x}px),calc(-50% + ${y}px))`;

});

// ===============================
// TOUCH EFFECT
// ===============================

document.addEventListener("touchmove",(e)=>{

const t=e.touches[0];

const x=(t.clientX/window.innerWidth-.5)*10;

const y=(t.clientY/window.innerHeight-.5)*10;

document.querySelector(".hero").style.transform=

`translate(calc(-50% + ${x}px),calc(-50% + ${y}px))`;

});

// ===============================
// VIDEO ZOOM
// ===============================

const video=document.getElementById("bgVideo");

let scale=1;

setInterval(()=>{

scale+=0.0002;

if(scale>1.08) scale=1;

video.style.transform=`translate(-50%,-50%) scale(${scale})`;

},30);

// ===============================
// HERO FADE
// ===============================

window.onload=()=>{

const hero=document.querySelector(".hero");

hero.style.opacity="0";

hero.style.transition="1.2s";

setTimeout(()=>{

hero.style.opacity="1";

},100);

};

// ===============================
// RANDOM GLOW
// ===============================

setInterval(()=>{

const h=document.querySelector(".hero");

h.style.boxShadow=`0 0 ${20+Math.random()*50}px rgba(180,0,255,.45)`;

},800);

// ===============================
// ENTER ANIMATION
// ===============================

enter.addEventListener("mouseenter",()=>{

enter.style.boxShadow="0 0 40px #ff00ff";

});

enter.addEventListener("mouseleave",()=>{

enter.style.boxShadow="0 0 20px #ff00ff";

});
