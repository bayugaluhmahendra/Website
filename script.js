const video=document.getElementById("video");
const music=document.getElementById("music");
const play=document.getElementById("play");
const start=document.getElementById("start");

play.onclick=async()=>{

try{

await video.play();

music.currentTime=video.currentTime;

await music.play();

start.style.display="none";

}catch(e){
alert("Browser memblokir autoplay");
}

};

video.addEventListener("timeupdate",()=>{

if(Math.abs(video.currentTime-music.currentTime)>0.15){

music.currentTime=video.currentTime;

}

});

video.addEventListener("play",()=>music.play());

video.addEventListener("pause",()=>music.pause());

video.addEventListener("seeking",()=>{

music.currentTime=video.currentTime;

});

video.addEventListener("ended",()=>{

video.currentTime=0;
music.currentTime=0;

video.play();
music.play();

});
