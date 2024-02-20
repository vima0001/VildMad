window.addEventListener("DOMContentLoaded", getProduct);

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `https://tamnyujkkpzvesfbwiez.supabase.co/rest/v1/R%C3%A5varer?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhbW55dWpra3B6dmVzZmJ3aWV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzNTQ2MjMsImV4cCI6MjAyMzkzMDYyM30.SY1vHy1FhIiLDJ-nvGmRIHWWw-K6Q6hfvzFxKi3MahU${id}`;

function getProduct() {
  console.log("vis");
  fetch(url)
    .then((res) => res.json())
    .then(visProdukt);
}

function visProdukt(ingrediens) {
//   document.querySelector(".season").textContent = ingrediens.season;
//   document.querySelector(".sankested").textContent = ingrediens.season;
//   document.querySelector(".produkt_img").src = `${id}.png`;
  
}

getProduct();
