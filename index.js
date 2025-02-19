
console.log(favorites);

//if (!favorites) favorites = []

fetch("/data/destinations.json")
  .then(response => response.json())
  .then(data => {
    let sectionElm = document.createElement("section")
    sectionElm.classList.add("section-thumbs")

    sectionElm.innerHTML = data.destinations.map(destination => {
      return `
      <article class="card">
        <figure class="card__imgContainer">
        <img src="/img/${destination.image}" alt="">   
        </figure>  
        <button class="card__favoritebtn ${favorites.includes(destination.id.toString()) ? "card__favoritebtn--selected" : ""}" data-favid="${destination.id}">heart</button>    
        <a class="card__link" href="destination.html?id=${destination.id}">
          More  
        </a>
        </article>
        `



    }).join("")

    sectionElm.querySelectorAll(".card__favoritebtn").forEach(function (button) {

      button.addEventListener("click", function (event) {
        let currentId = event.target.dataset.favid;
        if (favorites.includes(currentId)) {
          let newFavorites = favorites.filter(id => id != currentId)
          favorites = newFavorites
          event.target.classList.remove("card__favoritebtn--selected")
          console.log(favorites);
        } else {
          favorites.push(currentId)
          event.target.classList.add("card__favoritebtn--selected")
          console.log(favorites);
        }
        saveToLocalStorage("favorites", favorites)
      })
    })




    document.querySelector("#root").append(sectionElm)
  })