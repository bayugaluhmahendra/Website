const video = document.getElementById("video");
const music = document.getElementById("music");
const start = document.getElementById("start");
const particles = document.getElementById("particles");

// Buat partikel
function createParticle(){

    const p = document.createElement("div");

    p.className = "particle";

    p.style.left = Math.random() * window.innerWidth + "px";

    const size = Math.random() * 6 + 4;

    p.style.width = size + "px";
    p.style.height = size + "px";

    p.style.animationDuration = (Math.random()*3+4)+"s";

    particles.appendChild(p);

    setTimeout(()=>{
        p.remove();
    },7000);

}

setInterval(createParticle,120);

// Klik untuk mulai
document.body.addEventListener("click", async ()=>{

    // Jangan mulai kalau masih portrait
    if(window.innerHeight > window.innerWidth){
        return;
    }

    start.classList.add("hide");

    try{

        await video.play();

        if(music){
            await music.play();
        }

    }catch(e){
        console.log(e);
    }

},{once:true});

// Loop video
video.addEventListener("ended",()=>{

    video.currentTime=0;
    video.play();

});

// Sinkron musik
if(music){

    setInterval(()=>{

        if(Math.abs(video.currentTime-music.currentTime)>0.15){

            music.currentTime=video.currentTime;

        }

    },200);

}

// Pause saat portrait
function checkOrientation(){

    if(window.innerHeight>window.innerWidth){

        video.pause();

        if(music) music.pause();

    }

}

window.addEventListener("resize",checkOrientation);
window.addEventListener("orientationchange",checkOrientation);

checkOrientation();
