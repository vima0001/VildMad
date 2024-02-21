// memory game source: https://www.youtube.com/watch?v=M0egyNvsN-Y

window.addEventListener("load", sidenVises);

//const
const images = ["img/brun_skaelrorhat.png", "img/brunstokket.png", "img/ostershat.png", "img/morkel.png", "img/pigsvamp.png", "img/havtorn.png", "img/hindbaer.png"];
const shuffledImages = images.concat(images).sort(() => Math.random() - 0.5);
const startScreen = document.querySelector(".season");
const summerScreen = document.querySelector(".summertheme");
const winterScreen = document.querySelector(".wintertheme");
const springScreen = document.querySelector(".springtheme");
const fallScreen = document.querySelector(".falltheme");

let openBoxes = [];

// försök på visa förstasidan och gömma de andra
function sidenVises() {
  console.log("sidenVises");

  //verifiera element selection

  console.log("summerScreen:", summerScreen);
  console.log("winterScreen:", winterScreen);
  //göm andra skärmar
  summerScreen.classList.add("hide");
  winterScreen.classList.add("hide");
  springScreen.classList.add("hide");
  fallScreen.classList.add("hide");

  //Visa start skärm
  startScreen.classList.remove("hide");
  //Klicka på start_knap
  document.querySelector(".winter").addEventListener("click", startWinter);
  document.querySelector(".summer").addEventListener("click", startSummer);
  document.querySelector(".spring").addEventListener("click", startSpring);
  document.querySelector(".fall").addEventListener("click", startFall);
}

function startSummer() {
  console.log("startGame");
  //visa summerskärm
  summerScreen.classList.remove("hide");
  //göm andra skärmar
  startScreen.classList.add("hide");
  winterScreen.classList.add("hide");

  shuffledImages.forEach((image) => {
    let box = document.createElement("div");
    box.className = "summeritem";
    let img = document.createElement("img");
    img.src = image;
    img.alt = "Memory card";
    box.appendChild(img);

    box.addEventListener("click", function () {
      if (this.classList.contains("boxMatch") || this.classList.contains("boxOpen")) {
        return;
      }

      this.classList.add("boxOpen");
      openBoxes.push(this);

      if (openBoxes.length === 2) {
        const [firstBox, secondBox] = openBoxes;

        if (firstBox.querySelector("img").src === secondBox.querySelector("img").src) {
          firstBox.classList.add("boxMatch");
          secondBox.classList.add("boxMatch");
          openBoxes = [];

          if (document.querySelectorAll(".boxMatch").length === shuffledImages.length) {
            alert("You win!");
          }
        } else {
          setTimeout(() => {
            firstBox.classList.remove("boxOpen");
            secondBox.classList.remove("boxOpen");
            openBoxes = [];
          }, 500);
        }
      }
    });

    document.querySelector(".game").appendChild(box);
  });
}

function startWinter() {
  console.log("startWinter");
  // visa winterScreen göm andra
  winterScreen.classList.remove("hide");
  startScreen.classList.add("hide");
  summerScreen.classList.add("hide");

  // rensa game container
  document.querySelector(".game").innerHTML = "";

  shuffledImages.forEach((image) => {
    let box = document.createElement("div");
    box.className = "winteritem";
    let img = document.createElement("img");
    img.src = image;
    img.alt = "Memory card";
    box.appendChild(img);

    box.addEventListener("click", function () {
      if (this.classList.contains("boxMatch") || this.classList.contains("boxOpen")) {
        return;
      }

      this.classList.add("boxOpen");
      openBoxes.push(this);

      if (openBoxes.length === 2) {
        const [firstBox, secondBox] = openBoxes;

        if (firstBox.querySelector("img").src === secondBox.querySelector("img").src) {
          firstBox.classList.add("boxMatch");
          secondBox.classList.add("boxMatch");
          openBoxes = [];

          if (document.querySelectorAll(".boxMatch").length === shuffledImages.length) {
            alert("You win!");
          }
        } else {
          setTimeout(() => {
            firstBox.classList.remove("boxOpen");
            secondBox.classList.remove("boxOpen");
            openBoxes = [];
          }, 500);
        }
      }
    });

    document.querySelector(".wintertheme .game").appendChild(box);
  });
}

function startSpring() {
  console.log("startSpring");
  // visa springScreen göm andra
  springScreen.classList.remove("hide");
  startScreen.classList.add("hide");
  summerScreen.classList.add("hide");

  // rensa game container
  document.querySelector(".game").innerHTML = "";

  shuffledImages.forEach((image) => {
    let box = document.createElement("div");
    box.className = "springitem";
    let img = document.createElement("img");
    img.src = image;
    img.alt = "Memory card";
    box.appendChild(img);

    box.addEventListener("click", function () {
      if (this.classList.contains("boxMatch") || this.classList.contains("boxOpen")) {
        return;
      }

      this.classList.add("boxOpen");
      openBoxes.push(this);

      if (openBoxes.length === 2) {
        const [firstBox, secondBox] = openBoxes;

        if (firstBox.querySelector("img").src === secondBox.querySelector("img").src) {
          firstBox.classList.add("boxMatch");
          secondBox.classList.add("boxMatch");
          openBoxes = [];

          if (document.querySelectorAll(".boxMatch").length === shuffledImages.length) {
            alert("You win!");
          }
        } else {
          setTimeout(() => {
            firstBox.classList.remove("boxOpen");
            secondBox.classList.remove("boxOpen");
            openBoxes = [];
          }, 500);
        }
      }
    });

    document.querySelector(".springtheme .game").appendChild(box);
  });
}

function startFall() {
  console.log("startFall");
  // visa fallScreen göm andra
  fallScreen.classList.remove("hide");
  startScreen.classList.add("hide");
  summerScreen.classList.add("hide");

  // rensa game container
  document.querySelector(".game").innerHTML = "";

  shuffledImages.forEach((image) => {
    let box = document.createElement("div");
    box.className = "fallitem";
    let img = document.createElement("img");
    img.src = image;
    img.alt = "Memory card";
    box.appendChild(img);

    box.addEventListener("click", function () {
      if (this.classList.contains("boxMatch") || this.classList.contains("boxOpen")) {
        return;
      }

      this.classList.add("boxOpen");
      openBoxes.push(this);

      if (openBoxes.length === 2) {
        const [firstBox, secondBox] = openBoxes;

        if (firstBox.querySelector("img").src === secondBox.querySelector("img").src) {
          firstBox.classList.add("boxMatch");
          secondBox.classList.add("boxMatch");
          openBoxes = [];

          if (document.querySelectorAll(".boxMatch").length === shuffledImages.length) {
            alert("You win!");
          }
        } else {
          setTimeout(() => {
            firstBox.classList.remove("boxOpen");
            secondBox.classList.remove("boxOpen");
            openBoxes = [];
          }, 500);
        }
      }
    });

    document.querySelector(".falltheme .game").appendChild(box);
  });
}
