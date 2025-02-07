let bodyElm = document.querySelector("body");
let wrapperElm = document.createElement("div");
wrapperElm.classList.add("wrapper")
let mainElm = document.createElement("main");
mainElm.classList.add("main")
// let listGridElm = document.createElement("div")
// mainElm.classList.add("list-grid")

bodyElm.append(wrapperElm);

mainElm.innerHTML=`<h1>Apartments for rent</h1>`