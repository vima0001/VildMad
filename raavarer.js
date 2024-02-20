const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

//Fetche
fetch(`https://tamnyujkkpzvesfbwiez.supabase.co/rest/v1/R%C3%A5varer?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhbW55dWpra3B6dmVzZmJ3aWV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzNTQ2MjMsImV4cCI6MjAyMzkzMDYyM30.SY1vHy1FhIiLDJ-nvGmRIHWWw-K6Q6hfvzFxKi3MahU=` + category)
  .then((res) => res.json())
  .then(showProdukter);

function showProdukter(products) {
  //loope - brug forEach
  products.forEach(showProdukter);
}

//Trækker i templaten fra HTML
produkterTemplate = document.querySelector(".varer_template");
console.log("varer template", produkterTemplate);

//Trækker i containeren fra HTML - forældreelement
produkterContainer = document.querySelector(".varer_container");
console.log("varer container", produkterContainer);

function showProdukter(produkterJSON) {
  let produkterClone;
  //looper
  produkterJSON.forEach((produkter) => {
    console.log("Produkter", produkter);
    //Kloner til templaten.
    produkterClone = produkterTemplate.cloneNode(true).content;
    //textContent virker IKKE på billeder --> brug src.
    produkterClone.querySelector(".image_container").src = ` "https://vildmadv2.vps.webdock.io/application/files/4316/2436/8826/${produkter.id}.png`;
    produkterClone.querySelector(".image_container").alt = `Picture of ${produkter.name}`;
    //Overskriften får en tekst udskrevet, der er lig med vores "forEach + JSON-kategorinavn (find navn i JSON)"
    produkterClone.querySelector(".varer_overskrift").textContent = produkter.productdisplayname;
    // produkterClone.querySelector(".varer_sub_overskrift").textContent = `${produkter.articletype} || ${produkter.brandname}`;
    produkterClone.querySelector(".price_normal").textContent = "DKK " + produkter.price + ",-";
    produkterClone.querySelector("a").setAttribute("href", `produkt.html?id=${produkter.id}`);
    produkterClone.querySelector(".sale-tag").textContent = `${produkter.discount} %`;

    //UDSOLGT SKILT
    // if (produkter.soldout) {
    //   produkterClone.querySelector(".udsolgt-tag").classList.remove("skjul");
    //   produkterClone.querySelector(".image_container").classList.add("udsolgt");
    // }

    //UDSALG
    // if (produkter.discount) {
    //   produkterClone.querySelector(".sale-tag").classList.remove("skjul");
    //   produkterClone.querySelector(".price_normal").classList.add("skjul");
    //   produkterClone.querySelector(".price_before").classList.remove("skjul");
    //   produkterClone.querySelector(".price_before").textContent = "DKK " + produkter.price + " ,-";
    //   produkterClone.querySelector(".price_sale").classList.remove("skjul");
    //   produkterClone.querySelector(".price_sale").textContent = "DKK " + (produkter.price * (100 - produkter.discount)) / 100 + " ,-";
    // }
    //Børneelement til produkter_container. Det betyder at tingene vil ændre sig i containeren.
    produkterContainer.appendChild(produkterClone);
  });
}
