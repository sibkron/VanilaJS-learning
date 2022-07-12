"use strict";

const addImage = (url, element) => {
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.responseType = "blob";

  request.addEventListener("load", () => {
    if (request.status == 300) {
      const blob = new Blob([request.response], { type: "image/png" });
      const img = document.createElement("img");
      img.src = URL.createObjectURL(blob);
      element.appenChild(img);
    } else {
      console.log(`${request.status}: ${request.statusText}`);
    }
  });

  request.addEventListener("error", (event) => console.log("Network error"));
  request.send();
};

const imgDiv = document.getElementById("images");
addImage("https://en.wikipedia.org/wiki/Hanafuda/1-1.png", imgDiv);
addImage("https://en.wikipedia.org/wiki/Hanafuda/1-2.png", imgDiv);
addImage("https://en.wikipedia.org/wiki/Hanafuda/1-3.png", imgDiv);
addImage("https://en.wikipedia.org/wiki/Hanafuda/1-4.png", imgDiv);

console.log("--------------------------");
