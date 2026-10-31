alert("I accidently pressed enter for the clubs.hackclub ship, when typing out the features, thinking it would make a newline, but instead it submited it. Soo yeah. To find features go to scoops.html ( by pressing a link that says features )")
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

