let swirl = document.getElementById("swirl");
const audioContext = new AudioContext();
const audioEle =document.querySelector("audio");
const audioTrack = audioContext.createMediaElementSource(audioEle);
audioTrack.connect(audioContext.destination);
swirl.addEventListener("click", () => {
if(audioContext.state == "suspended"){
    audioContext.resume();
  }
  audioEle.play();

 
});

