


let search = window.location.search
let params = new URLSearchParams(search)
let id = params.get("id")

console.log(id);

fetch(`/data/${id}.json`)
    .then(response => response.json())
    .then(data => {
        let sectionElm = document.createElement("div")
        sectionElm.classList.add("selected-destination")
        sectionElm.innerHTML = `
    <figure class="destination__image">
    <img src="/img/${data.image}" alt="">
    </figure>
     <p>${data.facilities.join(" ")}</p>
     <a href="javascript:history.back()">Go back</a>
     <button class="card__favoritebtn" data-favid="${data.id}">heart</button>    
    `
        let favoriteBtn = sectionElm.querySelector(".card__favoritebtn")
        let currentId = favoriteBtn.dataset.favid
        if (favorites.includes(currentId)) {
            favoriteBtn.classList.add("card__favoritebtn--selected")
        }

        favoriteBtn.addEventListener("click", function () {
            if (favorites.includes(currentId)) {
                newFavorites = favorites.filter(id => id != currentId)
                favorites = newFavorites
                favoriteBtn.classList.remove("card__favoritebtn--selected")
                console.log(favorites);
            } else {
                favorites.push(currentId)
                favoriteBtn.classList.add("card__favoritebtn--selected")
            }
            saveToLocalStorage("favorites", favorites)
        })

        document.querySelector("#root").append(sectionElm)


    }
    )



