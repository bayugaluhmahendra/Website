const video = document.getElementById("video");
const startScreen = document.getElementById("startScreen");
const rotateScreen = document.getElementById("rotateScreen");
const particles = document.getElementById("particles");

let started = false;
let particleTimer = null;

/* =========================
   START
========================= */

async function startPlayer() {

    if (started) return;

    started = true;

    startScreen.classList.add("hide");

    try {

        await video.play();

    } catch (err) {

        console.log(err);

    }

}

document.addEventListener("click", startPlayer, { once: true });

/* =========================
   ORIENTATION
========================= */

function isPortrait() {
    return window.innerHeight > window.innerWidth;
}

function updateOrientation() {

    if (isPortrait()) {

        rotateScreen.style.display = "flex";

        if (!video.paused) {
            video.pause();
        }

    } else {

        rotateScreen.style.display = "none";

        if (started && video.paused) {
            video.play().catch(() => {});
        }

    }

}

window.addEventListener("resize", () => {

    clearTimeout(window.rotateTimer);

    window.rotateTimer = setTimeout(updateOrientation, 200);

});

window.addEventListener("orientationchange", () => {

    clearTimeout(window.rotateTimer);

    window.rotateTimer = setTimeout(updateOrientation, 200);

});

updateOrientation();

/* =========================
   PARTICLES
========================= */

function createParticle() {

    const p = document.createElement("div");

    p.className = "particle";

    const size = Math.random() * 6 + 3;

    p.style.width = size + "px";
    p.style.height = size + "px";

    p.style.left = Math.random() * window.innerWidth + "px";

    p.style.animationDuration = (4 + Math.random() * 4) + "s";

    particles.appendChild(p);

    p.addEventListener("animationend", () => {
        p.remove();
    });

}

particleTimer = setInterval(createParticle, 150);

/* =========================
   VIDEO
========================= */

video.addEventListener("loadedmetadata", () => {

    video.currentTime = 0;

});

video.addEventListener("ended", () => {

    video.currentTime = 0;

    video.play().catch(() => {});

});

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        video.pause();

    } else {

        if (started && !isPortrait()) {

            video.play().catch(() => {});

        }

    }

});
