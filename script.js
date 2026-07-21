const video = document.getElementById("video");
const music = document.getElementById("music");
const startScreen = document.getElementById("startScreen");
const flash = document.getElementById("flash");
const particles = document.getElementById("particles");

// Mulai saat layar disentuh
document.body.addEventListener("click", startPlayer, { once: true });

async function startPlayer() {

    // Hilangkan tampilan awal
    startScreen.classList.add("hide");

    try {

        video.currentTime = 0;
        music.currentTime = 0;

        await video.play();
        await music.play();

    } catch (err) {
        console.log(err);
    }
}

// Sinkronisasi audio dan video
setInterval(() => {

    if (Math.abs(video.currentTime - music.currentTime) > 0.1) {
        music.currentTime = video.currentTime;
    }

}, 100);

// Loop
video.addEventListener("ended", () => {

    video.currentTime = 0;
    music.currentTime = 0;

    video.play();
    music.play();

});

// Flash acak
setInterval(() => {

    if (Math.random() > 0.65) {

        flash.classList.add("flash");

        setTimeout(() => {
            flash.classList.remove("flash");
        }, 150);

    }

}, 500);

// Partikel
function createParticle() {

    const p = document.createElement("div");

    p.className = "particle";

    p.style.left = Math.random() * window.innerWidth + "px";

    const size = Math.random() * 8 + 3;

    p.style.width = size + "px";
    p.style.height = size + "px";

    p.style.animationDuration = (Math.random() * 4 + 4) + "s";

    particles.appendChild(p);

    setTimeout(() => {
        p.remove();
    }, 8000);

}

setInterval(createParticle, 120);
