   const video = document.getElementById("video");
const loading = document.getElementById("loading");
const start = document.getElementById("start");
const bar = document.querySelector(".bar");
const percent = document.getElementById("percent");
const particles = document.getElementById("particles");

let started = false;

/* ===========================
   LOADING
=========================== */

let progress = 0;

const loadingTimer = setInterval(() => {

    progress++;

    bar.style.width = progress + "%";
    percent.innerText = progress + "%";

    if(progress >= 100){

        clearInterval(loadingTimer);

        loading.classList.add("hide");

    }

},15);

/* ===========================
   START PLAYER
=========================== */

async function startVideo(){

    if(started) return;

    started = true;

    start.classList.add("hide");

    try{

        await video.play();

    }catch(err){

        console.log(err);

    }

    // Fullscreen jika browser mengizinkan
    if(document.documentElement.requestFullscreen){

        try{
            await document.documentElement.requestFullscreen();
        }catch(e){}

    }

}

document.addEventListener("click", startVideo, {once:true});

/* ===========================
   PARTICLES
=========================== */

function particle(){

    const p = document.createElement("div");

    p.className = "particle";

    const size = Math.random()*5+3;

    p.style.width = size+"px";
    p.style.height = size+"px";

    p.style.left = Math.random()*window.innerWidth+"px";

    p.style.animationDuration = (4+Math.random()*5)+"s";

    particles.appendChild(p);

    p.addEventListener("animationend",()=>{

        p.remove();

    });

}

setInterval(particle,150);

/* ===========================
   LOOP
=========================== */

video.addEventListener("ended",()=>{

    video.currentTime = 0;

    video.play();

});

/* ===========================
   RESIZE
=========================== */

window.addEventListener("resize",()=>{

    video.style.width = window.innerWidth+"px";
    video.style.height = window.innerHeight+"px";

});

/* ===========================
   TAB
=========================== */

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        video.pause();

    }else{

        if(started){

            video.play().catch(()=>{});

        }

    }

});
