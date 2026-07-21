const video = document.getElementById("video");
const start = document.getElementById("start");
const rotate = document.getElementById("rotate");
const particles = document.getElementById("particles");

let started = false;

// Partikel
function createParticle() {

    const p = document.createElement("div");

    p.className = "particle";

    p.style.left = Math.random() * window.innerWidth + "px";

    const size = Math.random() * 6 + 3;

    p.style.width = size + "px";
    p.style.height = size + "px";

    p.style.animationDuration = (Math.random() * 4 + 4) + "s";

    particles.appendChild(p);

    setTimeout(() => p.remove(), 8000);

}

setInterval(createParticle, 180);

// Mulai website
async function startWebsite() {

    if (started) return;

    started = true;

    start.classList.add("hide");

    try {

        await video.play();

    } catch (e) {

        console.log(e);

    }

}

document.body.addEventListener("click", startWebsite);

// Cek orientasi
function updateOrientation() {

    const portrait = window.matchMedia("(orientation: portrait)").matches;

    if (portrait) {

        rotate.style.display = "flex";

        if (!video.paused) {

            video.pause();

        }

    } else {

        rotate.style.display = "none";

        if (started && video.paused) {

            video.play().catch(() => {});

        }

    }

}

window.addEventListener("resize", updateOrientation);
window.addEventListener("orientationchange", () => {

    setTimeout(updateOrientation, 250);

});

updateOrientation();
