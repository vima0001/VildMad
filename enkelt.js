//Link virker ikke, og derfor kommer dataen ikke frem...

// window.addEventListener("DOMContentLoaded", showFood);
const url = "https://tamnyujkkpzvesfbwiez.supabase.co/rest/v1/";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhbW55dWpra3B6dmVzZmJ3aWV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzNTQ2MjMsImV4cCI6MjAyMzkzMDYyM30.SY1vHy1FhIiLDJ-nvGmRIHWWw-K6Q6hfvzFxKi3MahU";

const urlParams = new URLSearchParams(window.location.search);
console.log("urlParams", urlParams);
// const id = urlParams.get("id");
const id = 1;

fetch(`${url}Raavarer?id=eq.${id}`, {
  method: "GET",
  headers: {
    apikey: key,
  },
})
  .then((res) => res.json())
  .then((data) => showFood(data[0]));

function showFood(food) {
  console.log(food);
  document.querySelector(".svamp").src = food.img;
  document.querySelector(".h1_overskrift").textContent = food.name;
  document.querySelector(".info").textContent = food.top_beskrivelse;
  document.querySelector(".sankested").textContent = food.sankested;
  document.querySelector(".season").textContent = food.season;
  document.querySelector(".beskrivelse").textContent = food.beskrivelse;
  document.querySelector(".sankning").textContent = food.sankning;
}

// showFood();
