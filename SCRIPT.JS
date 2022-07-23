console.log("welcome to WaLteR ERA ");

// initialize the variables
let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let progressbar = document.getElementById("progressbar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItem = Array.from(document.getElementsByClassName("songItem"))

let songs = [
  {songName: "JAI HANUMAN", filePath: "1.mp3", coverPath: "cover1.jpg"},
  {songName: "THe-Score-Unstoppable", filePath: "2.mp3", coverPath: "cover2.jpg"},
  {songName: "Darkside - Alan Walker(DJSathi)", filePath: "3.mp3", coverPath: "cover3.jpg"},
  {songName: "Enemy(PaglaSongs)", filePath: "4.mp3", coverPath: "cover4.jpg"},
  {songName: "Imagine Dragons - Bad Liar", filePath: "5.mp3", coverPath: "cover5.jpg"},
  {songName: "Imagine Dragons - Natural", filePath: "6.mp3", coverPath: "cover6.jpg"},
  {songName: "NEFFEX - Fight Back", filePath: "7.mp3", coverPath: "cover7.jpg"},
  {songName: "Take+Me+To+Church", filePath: "8.mp3", coverPath: "cover8.jpg"},
  ];
  songItem.forEach((element, i) => {
   element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
  });
// audioElement.play();

// control play/pause click
masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");3
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.style.opacity = 0;
    }
})
// listen to events
audioElement.addEventListener("timeupdate", ()=>{
    
  // update seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
progressbar.value = progress;
});
progressbar.addEventListener("change",()=>{
  audioElement.currentTime = progressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.classList.remove('fa-play');
  element.classList.add('fa-play');
  })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{
 makeAllPlays();
songIndex = parseInt(e.target.id);
  e.target.classList.remove('fa-play');
  e.target.classList.add('fa-pause');
  audioElement.src = `${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");  
 
  })
})
document.getElementById('next').addEventListener('click',()=>{
  if(songIndex>=9){
    songIndex = 0
  }
  else{
    songIndex += 1;
  }
  audioElement.src = `${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
  })

  document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
      songIndex = 0
    }
    else{
      songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
  })