document.getElementById("audio") = "none";
let language = "english";
let calculated = "no";
document.getElementById("id1").style.display = "none";
function changecolor() {
  document.getElementById("id1").style.display = "block";
  calculated = "yes";
  setTimeout(() => {
    if (language == "english") {
      document.getElementById("id1").innerHTML = "yes, noa is gay"
    } else {
      document.getElementById("id1").innerHTML = "ja, noa är bög"
    }
  }, 1000);
}
function changelanguageenglish() {
  language = "english";
  document.getElementById("1").innerHTML = "is noa gay?";
  document.getElementById("button1").innerHTML = "calculate";
  if (calculated == "yes") {
    document.getElementById("id1").innerHTML = "yes, noa is gay";
  } else {
    document.getElementById("id1").innerHTML = "wait...";
  }
}

function changelanguageswedish() {
  language = "swedish";
  document.getElementById("1").innerHTML = "är noa bög?";
  document.getElementById("button1").innerHTML = "räkna ut";
  if (calculated == "yes") {
    document.getElementById("id1").innerHTML = "ja, noa är bög";
  } else {
    document.getElementById("id1").innerHTML = "vänta...";
  }
}
function playsound() {
  let audio = document.getElementById("audio")
  audio.play()
}
