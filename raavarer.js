const url = "https://tamnyujkkpzvesfbwiez.supabase.co/rest/v1/";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhbW55dWpra3B6dmVzZmJ3aWV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzNTQ2MjMsImV4cCI6MjAyMzkzMDYyM30.SY1vHy1FhIiLDJ-nvGmRIHWWw-K6Q6hfvzFxKi3MahU";

fetch(`${url}Raavarer`, {
  method: "GET",
  headers: {
    apikey: key,
  },
})
  .then((res) => res.json())
  .then(showFoods);

function showFoods(foods) {
  console.log("foods", foods);
  //Looper og viser 1 food
  foods.forEach(showFood);
}

function showFood(food) {
  //Går i HTML og fanger templaten
  const template = document.querySelector("#foodTemplate").content;
  const copy = template.cloneNode(true);

  // TextContent hiver fat i det tekstindhold fra API'en, her har vi valgt at den skal tage fat i "name"
  copy.querySelector(".h3_overskrift").textContent = food.name;

  // Her gælder det samme, men her tager den fat i den givne kategori
  copy.querySelector(".h4_overskrift").textContent = food.catgories;

  // Her skal vi have fat i billedet fra api'en og der gør man ligesom i html ved at indsætte src
  copy.querySelector(".main_img").src = food.img;

  // Denne gør at man kommer til det rigtige produkt når man klikker inde fra produktlisten
  copy.querySelector("a").href= `enkelt.html?id=${food.id}`

// Appende
  document.querySelector(".beer_container").appendChild(copy);
}

