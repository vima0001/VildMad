//Link virker ikke, og derfor kommer dataen ikke frem...

// window.addEventListener("DOMContentLoaded", showFood);

fetch("https://tamnyujkkpzvesfbwiez.supabase.co/rest/v1/R%C3%A5varer?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhbW55dWpra3B6dmVzZmJ3aWV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzNTQ2MjMsImV4cCI6MjAyMzkzMDYyM30.SY1vHy1FhIiLDJ-nvGmRIHWWw-K6Q6hfvzFxKi3MahU")
  .then((res) => res.json())
  .then((data) => showFood(data));

function showFood(food) {
  console.log(food);
  document.querySelector(".svamp").src = `https://vildmadv2.vps.webdock.io/application/files/4316/2436/${food.id}.png`;
  document.querySelector(".info").textContent = food.top_beskrivelse;
  document.querySelector(".sankested").textContent = food.sankested;
  document.querySelector(".season").textContent = food.season;
  document.querySelector(".beskrivelse").textContent = food.beskrivelse;
  document.querySelector(".sankning").textContent = food.sankning;
}

// showFood();
