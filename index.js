// DEFAULT CODE ////////////////////////
const BASE_URL = "https://api.lyrics.ovh/v1/";
const songList = document.querySelector("#song-list");
const lyricsPanel = document.querySelector("#lyrics-panel");
const album = {
  artist: "Adele",
  album: "25",
  tracks: [
    "Hello",
    "Send My Love (To Your New Lover)",
    "I Miss You",
    "When We Were Young",
    "Remedy",
    "Water Under the Bridge",
    "River Lea",
    "Love in the Dark",
    "Million Years Ago",
    "All I Ask",
    "Sweetest Devotion"
  ]
};

// WRITE YOUR CODE ////////////////////////
let bufferWords = "";
function showList(album) {
  for (let song of album.tracks) {
    bufferWords += `<li class="nav-item">
    <a class="nav-link" href="#">${song}</a>
  </li>`;

  }
  songList.innerHTML = bufferWords;
  bufferWords = "";
}
showList(album);
function showLyrics(songName) {
  bufferWords = "";
  axios.get(`${BASE_URL}adele/${songName}`).then(response => {
    // console.log(response.data.lyrics);
    bufferWords = `<h3>${songName}</h3><pre>${response.data.lyrics}</pre>`;
    lyricsPanel.innerHTML = bufferWords;
  });
}
songList.addEventListener("click", event => {
  if (event.target.classList.contains("nav-link")) {
    let songName = event.target.innerText;
    console.log(songName);
    showLyrics(songName);
  }
});