const video = document.getElementById("video");
const loading = document.getElementById("loading");
const start = document.getElementById("start");

const playBtn = document.getElementById("playBtn");
const fullscreenBtn = document.getElementById("fullscreen");

const seekBar = document.getElementById("seekBar");
const seek = document.getElementById("seek");

const time = document.getElementById("time");
const particles = document.getElementById("particles");

const bar = document.querySelector(".bar");
const percent = document.getElementById("percent");

let started = false;

/* --------------------
   Loading
-------------------- */

let load = 0;

const loadingAnim = setInterval(() => {

    load++;

    bar.style.width = load + "%";
    percent.innerText = load + "%";

    if(load >= 100){

        clearInterval(loadingAnim);

        loading.classList.add("hide");

    }

},15);

/* --------------------
   Start
-------------------- */

async function startPlayer(){

    if(started) return;

    started = true;

    start.classList.add("hide");

    try{

        await video.play();

    }catch(e){}

}

document.addEventListener("click",startPlayer,{once:true});

/* --------------------
   Play Pause
-------------------- */

playBtn.onclick=()=>{

    if(video.paused){

        video.play();

    }else{

        video.pause();

    }

}

video.onplay=()=>{

    playBtn.innerHTML="❚❚";

}

video.onpause=()=>{

    playBtn.innerHTML="▶";

}

/* --------------------
   Progress
-------------------- */

function format(sec){

    let m=Math.floor(sec/60);

    let s=Math.floor(sec%60);

    if(s<10)s="0"+s;

    return m+":"+s;

}

video.ontimeupdate=()=>{

    let p=(video.currentTime/video.duration)*100;

    seekBar.style.width=p+"%";

    time.innerHTML=

    format(video.currentTime)+" / "+format(video.duration);

}

/* --------------------
   Seek
-------------------- */

seek.onclick=(e)=>{

    const rect=seek.getBoundingClientRect();

    const pos=(e.clientX-rect.left)/rect.width;

    video.currentTime=video.duration*pos;

}

/* --------------------
   Fullscreen
-------------------- */

fullscreen.onclick=()=>{

    if(!document.fullscreenElement){

        document.documentElement.requestFullscreen();

    }else{

        document.exitFullscreen();

    }

}

/* --------------------
   Auto Hide
-------------------- */

let hide;

function showControls(){

    controls.style.opacity="1";

    clearTimeout(hide);

    hide=setTimeout(()=>{

        if(!video.paused){

            controls.style.opacity="0";

        }

    },3000);

}

document.addEventListener("mousemove",showControls);

document.addEventListener("touchstart",showControls);

/* --------------------
   Particle
-------------------- */

function particle(){

    const p=document.createElement("div");

    p.className="particle";

    const size=Math.random()*5+3;

    p.style.width=size+"px";

    p.style.height=size+"px";

    p.style.left=Math.random()*100+"vw";

    p.style.animationDuration=(5+Math.random()*5)+"s";

    particles.appendChild(p);

    p.addEventListener("animationend",()=>{

        p.remove();

    });

}

setInterval(particle,180);
