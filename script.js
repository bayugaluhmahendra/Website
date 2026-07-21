const playBtn = document.getElementById("play");
const bgm = document.getElementById("bgm");

playBtn.addEventListener("click", () => {

    // Putar musik
    bgm.play().catch(() => {});

    // Animasi tombol
    playBtn.style.transform = "scale(.95)";
    playBtn.innerHTML = "Loading...";

    // Efek fade
    document.querySelector(".hero").style.transition = "1s";
    document.querySelector(".hero").style.transform = "scale(1.05)";

    setTimeout(() => {

        document.querySelector(".hero").innerHTML = `

        <h1>✨ Welcome ✨</h1>

        <p>
        Selamat datang di halaman sinematik.
        Nikmati animasi dan musiknya.
        </p>

        `;

    },1500);

});


// ==========================
// Efek Partikel Berkilau
// ==========================

for(let i=0;i<40;i++){

    const dot = document.createElement("div");

    dot.className = "spark";

    dot.style.left = Math.random()*100+"vw";

    dot.style.animationDuration = (4+Math.random()*6)+"s";

    dot.style.animationDelay = Math.random()*5+"s";

    dot.style.opacity = Math.random();

    document.body.appendChild(dot);

}
