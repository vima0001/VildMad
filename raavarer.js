fetch("https://tamnyujkkpzvesfbwiez.supabase.co/rest/v1/R%C3%A5varer?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhbW55dWpra3B6dmVzZmJ3aWV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzNTQ2MjMsImV4cCI6MjAyMzkzMDYyM30.SY1vHy1FhIiLDJ-nvGmRIHWWw-K6Q6hfvzFxKi3MahU")
  .then((res) => res.json())
  .then(showFoods);

function showFoods(foods) {
  //Looper og viser 1 food
  foods.forEach(showFood);
}

function showFood(food) {
  console.log(food);
  //Går i HTML og fanger templaten
  const template = document.querySelector("#smallFoodTemplate").textContent;
  const copy = template.cloneNode(true);
  copy.querySelector("h3_overskrift").textContent = food.name;
  copy.querySelector("h4_overskrift").textContent = food.catgories;
  document.querySelector("main").appendChild(copy);
}

// {
//   "id": 1,
//   "created_at": "2024-02-19T15:12:01+00:00",
//   "name": "Watercress",
//   "sankested": "Watercress can be found in and around streams, lakes, and creeks that have a good flow of clear water. It can grow on the banks or in the water itself (though in that case, part of the plant will be hidden). Take care not to pick watercress in streams where cattle or sheep graze nearby, as infected animals can transmit a liver fluke parasite to humans.\nLakes, streams.",
//   "season": "You can normally pick watercress from May until November, but in milder winters you might be lucky enough to find it growing year round.\nEntire plant: May, June, July, August, September, October, November.",
//   "beskrivelse": "Watercress can grow 40-60 cm high and has hollow, succulent stems. The leaves are oval-shaped and look like small water lilies. They grow in pairs on side shoots off the main stem and end in a single round leaf. Smooth all over, the plant develops small, white flowers that are yellowish-green in the center.",
//   "sankning": "Cut or snip the young shoots off the plant. When watercress blossoms, its sharpness intensifies, so unless you can't get enough of that flavor, avoid gathering it then.",
//   "img": "https://vildmadv2.vps.webdock.io/application/files/4316/2436/8826/Brondkarse_ravarkort_app.png",
//   "catgories": "herbs and small growths",
//   "top_beskrivelse": "Watercress is a sharp-tasting herb that grows abundantly alongside streams and creeks. It has been used in cooking for centuries; watercress soup, for example, is a classic in many cuisines. "
// }
