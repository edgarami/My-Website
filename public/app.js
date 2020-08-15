const checkbox = document.querySelector("#checkbox");
const logo = document.getElementById("logo");
if (window.matchMedia("prefers-color-scheme: dark").matches) {
  checkbox.setAttribute("checked", true);
}

checkbox.addEventListener("change", function (event) {
  console.log(this.checked);

  if (this.checked) {
    document.body.classList.remove("is-light-mode");
    document.body.classList.add("is-dark-mode");
    logo.src = "/icons/black-logo2.png";
  } else {
    document.body.classList.remove("is-dark-mode");
    document.body.classList.add("is-light-mode");
    logo.src = "/icons/logo-edgar.png";
  }
});

var words = [
  "Frontend developer",
  "Dreamer",
  "Gamer",
  "Apasionate",
  "Frontend developer",
];
var letters = "abcdefghijklmnopqrstuvwxyz#%&^+=-",
  speed = 250,
  steps = 4,
  loader = document.querySelector("#loader");

function getRandomWord() {
  var randomWord = words[Math.floor(Math.random() * words.length)];
  return randomWord;
}
function getRandomLetter() {
  var randomLetter = letters[Math.floor(Math.random() * letters.length)];
  return randomLetter;
}

function randomWordLoop() {
  var word = getRandomWord();
  var textLength = word.length;
  for (var i = 0; i < textLength; i++) {
    (function (i, word) {
      letterAppear(i, word);
    })(i, word);
  }

  function letterAppear(i, word) {
    setTimeout(function () {
      randomLetters(i, word);
    }, speed * i);
  }

  function randomLetters(i, word) {
    for (var j = 0; j <= steps; j++) {
      charsAnim(i, word, j);
    }
  }

  function charsAnim(i, word, j) {
    setTimeout(function () {
      var count = j;
      if (j < steps) {
        randomChar(i, word, count, j);
      } else {
        goodChar(i, word, count, j);
      }
      /* seems it fails less if I divide j, don't know why */
      /*}, (speed/steps)*(j / 1.8));*/
    }, (speed / steps) * j - speed / steps);
  }

  function randomChar(i, word, count, j) {
    var letter = getRandomLetter();
    if (j > 0) {
      var oldText = loader.textContent.slice(0, -1);
    } else {
      var oldText = loader.textContent;
    }
    loader.textContent = oldText + letter;
  }
  function goodChar(i, word, count, j) {
    var oldText = loader.textContent.slice(0, -1);
    loader.textContent = oldText + word[i];
    if (i == textLength - 1) {
      removeWord();
    }
  }

  function removeWord() {
    setTimeout(function () {
      for (var k = 0; k < textLength; k++) {
        removeLetters(k);
      }
    }, speed * 2);
  }
  function removeLetters(k) {
    setTimeout(function () {
      removeLetter(k);
    }, 75 * k);
  }
  function removeLetter(k) {
    var actualText = loader.textContent.slice(0, -1);
    loader.textContent = actualText;
    if (k == textLength - 1) {
      randomWordLoop();
    }
  }
}

randomWordLoop();

window.sr = ScrollReveal();
sr.reveal(".ul_list_container", {
  duration: 3000,
  origin: "bottom",
  distance: "-100px",
});

window.sr = ScrollReveal();
sr.reveal(".title_container", {
  duration: 3000,
  origin: "bottom",
  distance: "-100px",
});

window.sr = ScrollReveal();
sr.reveal(".container-about-text", {
  duration: 3000,
  origin: "rigth",
  distance: "-3000px",
});
window.sr = ScrollReveal();
sr.reveal(".container-about-img", {
  duration: 2000,
  origin: "left",
  distance: "-3000px",
});
window.sr = ScrollReveal();
sr.reveal(".scroll-footer", {
  duration: 2000,
  origin: "top",
  distance: "-3000px",
});
