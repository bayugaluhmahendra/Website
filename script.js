// Video.js
const player = videojs('player', {
    controls: true,
    autoplay: false,
    preload: "auto",
    responsive: true,
    fluid: false
});

const loading = document.getElementById("loading");
const start = document.getElementById("start");
const bar = document.querySelector(".bar");
const percent = document.getElementById("percent");
const particles = document.getElementById("particles");

let started = false;

/* ===========================
   LOADING
=========================== */

let value = 0;

const loader = setInterval(() => {

    value++;

    bar.style.width = value + "%";
    percent.textContent = value + "%";

    if(value >= 100){

        clearInterval(loader);

        loading.classList.add("hide");

    }

},20);

/* ===========================
   TAP ANYWHERE
=========================== */

document.addEventListener("click", async () => {

    if(started) return;

    started = true;

    start.classList.add("hide");

    try{

        await player.play();

    }catch(err){

        console.log(err);

    }

},{once:true});

/* ===========================
   PARTICLES
=========================== */

function createParticle(){

    const p = document.createElement("div");

    p.className="particle";

    const size = Math.random()*5+3;

    p.style.width=size+"px";
    p.style.height=size+"px";

    p.style.left=Math.random()*window.innerWidth+"px";

    p.style.animationDuration=(4+Math.random()*5)+"s";

    particles.appendChild(p);

    p.addEventListener("animationend",()=>{

        p.remove();

    });

}

setInterval(createParticle,180);

/* ===========================
   RESIZE
=========================== */

window.addEventListener("resize",()=>{

    player.currentWidth(window.innerWidth);
    player.currentHeight(window.innerHeight);

});

/* ===========================
   TAB BACKGROUND
=========================== */

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        player.pause();

    }else{

        if(started){

            player.play().catch(()=>{});

        }

    }

});             
