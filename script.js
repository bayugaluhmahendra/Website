const player = videojs('player', {
    autoplay: false,
    controls: true,
    preload: "auto",
    responsive: true,
    fluid: true
});

const startScreen = document.getElementById("startScreen");
const rotateScreen = document.getElementById("rotateScreen");

let started = false;

// Klik sekali untuk mulai
document.addEventListener("click", async () => {

    if (started) return;

    started = true;

    startScreen.classList.add("hide");

    try {
        await player.play();
    } catch (e) {
        console.log(e);
    }

}, { once: true });

// Cek orientasi
function updateOrientation() {

    const landscape = window.matchMedia("(orientation: landscape)").matches;

    if (landscape) {

        rotateScreen.style.display = "none";

        if (started && player.paused()) {
            player.play().catch(() => {});
        }

    } else {

        rotateScreen.style.display = "flex";

        if (!player.paused()) {
            player.pause();
        }

    }

}

// Saat orientasi berubah
window.addEventListener("orientationchange", () => {
    setTimeout(updateOrientation, 300);
});

window.addEventListener("resize", () => {
    setTimeout(updateOrientation, 300);
});

updateOrientation();

// Lanjutkan jika kembali ke tab
document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        player.pause();

    } else {

        if (started && window.matchMedia("(orientation: landscape)").matches) {
            player.play().catch(() => {});
        }

    }

});
