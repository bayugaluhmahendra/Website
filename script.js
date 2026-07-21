const video = document.getElementById("bgVideo");
const music = document.getElementById("bgMusic");
const loader = document.getElementById("loader");
const flash = document.getElementById("flash");
const particles = document.getElementById("particles");

// Loading selesai
window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.display = "none";
    }, 1500);
});

// Mulai saat layar disentuh
document.body.addEventListener("click", startPlayer, { once: true });

async function startPlayer() {
    try {

        video.currentTime = 0;
        music.currentTime = 0;

        await video.play();
        await music.play();

    } catch (e) {
        console.log(e);
    }
}

// Sinkronkan video dan musik
setInterval(() => {

    if (Math.abs(video.currentTime - music.currentTime) > 0.08) {
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

// Flash + Shake tiap 500ms
setInterval(() => {

    flash.classList.add("flash");

    document.body.classList.add("shake");

    setTimeout(() => {
        flash.classList.remove("flash");
        document.body.classList.remove("shake");
    }, 180);

}, 500);

// Partikel
function createParticle() {

    const p = document.createElement("div");

    p.className = "particle";

    p.style.left = Math.random() * window.innerWidth + "px";

    p.style.width = (4 + Math.random() * 8) + "px";

    p.style.height = p.style.width;

    p.style.animationDuration = (4 + Math.random() * 4) + "s";

    particles.appendChild(p);

    setTimeout(() => {
        p.remove();
    }, 8000);

}

setInterval(createParticle, 120);
