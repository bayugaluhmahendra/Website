// =======================
// MATRIX EFFECT
// =======================

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&";
const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

function matrix() {

    ctx.fillStyle = "rgba(0,0,0,.08)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="#00ff55";
    ctx.font = fontSize + "px monospace";

    for(let i=0;i<drops.length;i++){

        const text = letters[Math.floor(Math.random()*letters.length)];

        ctx.fillText(text,i*fontSize,drops[i]*fontSize);

        if(drops[i]*fontSize > canvas.height && Math.random() > .975)
            drops[i]=0;

        drops[i]++;
    }

}

setInterval(matrix,35);


// =======================
// TERMINAL
// =======================

const terminal = document.getElementById("terminal");
const statusText = document.querySelector(".status");
const bar = document.querySelector(".bar");

const logs = [

"Starting visual system...",
"Loading interface...",
"Connecting...",
"Checking browser...",
"Loading animation...",
"Initializing Matrix...",
"Preparing terminal...",
"Almost ready...",
"Launching demo..."

];

let index=0;
let percent=0;

function addLine(text){

    const div=document.createElement("div");

    div.className="line";

    div.innerHTML="> "+text;

    terminal.appendChild(div);

    terminal.scrollTop=terminal.scrollHeight;

}

const interval=setInterval(()=>{

    if(index<logs.length){

        addLine(logs[index]);

        statusText.innerHTML=logs[index];

        index++;

    }

},900);


// =======================
// PROGRESS
// =======================

const loading=setInterval(()=>{

    percent++;

    bar.style.width=percent+"%";

    if(percent>=100){

        clearInterval(loading);
        clearInterval(interval);

        finish();

    }

},120);


// =======================
// FINISH
// =======================

function finish(){

    document.body.classList.add("glitch");

    if(navigator.vibrate){
        navigator.vibrate([200,100,200]);
    }

    setTimeout(()=>{

        document.body.classList.remove("glitch");

        terminal.innerHTML += `
        <br>
        <div style="color:#00ff55;font-size:22px;text-align:center;">
        🎉 PRANK! 🎉
        </div>

        <br>

        <div style="text-align:center;">
        Ini hanya simulasi tampilan.<br>
        Tidak ada data yang diambil,<br>
        tidak ada akses ke kamera,<br>
        dan tidak ada proses peretasan.
        </div>
        `;

        statusText.innerHTML="Demo selesai.";

    },1500);

}
