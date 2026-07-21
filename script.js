 const player = videojs('player', {
    controls: true,
    preload: "auto",
    fluid: true,
    responsive: true
});

const loading = document.getElementById("loading");
const start = document.getElementById("start");
const rotate = document.getElementById("rotate");
const bar = document.querySelector(".bar");
const percent = document.getElementById("percent");
const particles = document.getElementById("particles");

let started = false;

/* Loading Animation */
let p = 0;

const loadingAnim = setInterval(() => {

    p++;

    bar.style.width = p + "%";
    percent.textContent = p + "%";

    if (p >= 100) {

        clearInterval(loadingAnim);

        loading.classList.add("hide");

    }

}, 20);

/* Tap Anywhere */

document.addEventListener("click", async () => {

    if (started) return;

    started = true;

    start.classList.add("hide");

    try {

        await player.play();

    } catch (e) {}

}, { once: true });

/* Rotate */

function updateRotate() {

    const landscape =
        window.matchMedia("(orientation: landscape)").matches;

    if (landscape) {

        rotate.style.display = "none";

        if (started && player.paused()) {

            player.play().catch(() => {});

        }

    } else {

        rotate.style.display = "flex";

        if (!player.paused()) {

            player.pause();

        }

    }

}

window.addEventListener("resize", updateRotate);
window.addEventListener("orientationchange", () => {

    setTimeout(updateRotate, 300);

});

updateRotate();

/* Particles */

function createParticle() {

    const p = document.createElement("div");

    p.className = "particle";

    p.style.left = Math.random() * window.innerWidth + "px";

    const size = Math.random() * 6 + 3;

    p.style.width = size + "px";
    p.style.height = size + "px";

    p.style.animationDuration = (4 + Math.random() * 4) + "s";

    particles.appendChild(p);

    p.addEventListener("animationend", () => p.remove());

}

setInterval(createParticle, 180);

/* Tab Visibility */

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        player.pause();

    } else {

        if (started &&
            window.matchMedia("(orientation: landscape)").matches) {

            player.play().catch(() => {});

        }

    }

});   
