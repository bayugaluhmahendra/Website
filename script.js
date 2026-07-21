// ===========================
// JAM & TANGGAL
// ===========================

const clock = document.getElementById("clock");
const date = document.getElementById("date");

function updateClock() {

    const now = new Date();

    clock.textContent = now.toLocaleTimeString("id-ID", {
        hour12: false
    });

    date.textContent = now.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

}

updateClock();

setInterval(updateClock,1000);

// ===========================
// PARTIKEL
// ===========================

const particles = document.getElementById("particles");

for(let i=0;i<70;i++){

    const p=document.createElement("div");

    p.className="spark";

    p.style.left=Math.random()*100+"vw";

    p.style.top=Math.random()*100+"vh";

    p.style.animationDuration=(6+Math.random()*8)+"s";

    p.style.animationDelay=Math.random()*5+"s";

    p.style.opacity=Math.random();

    particles.appendChild(p);

}

// ===========================
// MUSIK
// ===========================

const btn=document.getElementById("enter");
const music=document.getElementById("music");

btn.addEventListener("click",()=>{

    music.play().catch(()=>{});

    btn.innerHTML="WELCOME";

    btn.disabled=true;

});

// ===========================
// PARALLAX (Laptop)
// ===========================

document.addEventListener("mousemove",(e)=>{

    const hero=document.querySelector(".hero");

    const x=(e.clientX/window.innerWidth-.5)*12;

    const y=(e.clientY/window.innerHeight-.5)*12;

    hero.style.transform=
    `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;

});

// ===========================
// TOUCH EFFECT (HP)
// ===========================

document.addEventListener("touchmove",(e)=>{

    const hero=document.querySelector(".hero");

    const t=e.touches[0];

    const x=(t.clientX/window.innerWidth-.5)*8;

    const y=(t.clientY/window.innerHeight-.5)*8;

    hero.style.transform=
    `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;

});

// ===========================
// GLOW ANIMATION
// ===========================

setInterval(()=>{

    const hero=document.querySelector(".hero");

    hero.style.boxShadow=
    `0 0 ${25+Math.random()*25}px rgba(180,0,255,.45)`;

},1000);

// ===========================
// VIDEO PLAYBACK SAFETY
// ===========================

const video=document.getElementById("bgVideo");

video.play().catch(()=>{

    console.log("Browser menunggu interaksi pengguna untuk memutar video.");

});

// ===========================
// LOADING
// ===========================

const loader=document.getElementById("loader");

const fill=document.getElementById("loadingFill");

let progress=0;

const loading=setInterval(()=>{

progress++;

fill.style.width=progress+"%";

if(progress>=100){

clearInterval(loading);

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.remove();

},1000);

},400);

}

},25);
