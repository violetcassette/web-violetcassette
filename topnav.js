function myTopnav() {
  var x = document.getElementById("topnavdiv");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function newInterests() {
  document.getElementById("interestsicon").src="/images/icons/interests_hover.gif";
//  var x = document.getElementById("sfxHover"); 
//  x.play();
}

function oldInterests() {
  document.getElementById("interestsicon").src="/images/icons/interests.png";
}