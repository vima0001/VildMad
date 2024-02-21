//Link virker ikke, og derfor kommer dataen ikke frem...

// window.addEventListener("DOMContentLoaded", showFood);
// const url = "https://tamnyujkkpzvesfbwiez.supabase.co/rest/v1/";
// const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhbW55dWpra3B6dmVzZmJ3aWV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzNTQ2MjMsImV4cCI6MjAyMzkzMDYyM30.SY1vHy1FhIiLDJ-nvGmRIHWWw-K6Q6hfvzFxKi3MahU";

const urlParams = new URLSearchParams(window.location.search);
console.log("urlParams", urlParams);
const id = urlParams.get("id");
// const id = 1;

fetch(`https://tamnyujkkpzvesfbwiez.supabase.co/rest/v1/Raavarer?id=eq.${id}`, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhbW55dWpra3B6dmVzZmJ3aWV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzNTQ2MjMsImV4cCI6MjAyMzkzMDYyM30.SY1vHy1FhIiLDJ-nvGmRIHWWw-K6Q6hfvzFxKi3MahU",
  },
})
  .then((res) => res.json())
  .then(showFood);

function showFood(food) {
  console.log(food);
  const singleFood = food[0];

  document.querySelector(".svamp").src = singleFood.img;
  document.querySelector(".h1_overskrift").textContent = singleFood.name;
  document.querySelector(".info").textContent = singleFood.top_beskrivelse;
  document.querySelector(".sankested").textContent = singleFood.sankested;
  document.querySelector(".season").textContent = singleFood.season;
  document.querySelector(".beskrivelse").textContent = singleFood.beskrivelse;
  document.querySelector(".sankning").textContent = singleFood.sankning;
}

// showFood();
