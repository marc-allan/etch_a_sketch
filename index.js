// CRIAR de forma dinâmica uma pággina com uma grid de 16x16 divs quadradas usando flexbox
// 


let container = document.querySelector("div#container")
let divSize = 16**2

function addRows() {
    for(let i = 1; i <= divSize; i++) {
        let newDivs = document.createElement("div");
        newDivs.className = "newDivs";
        container.append(newDivs);
}
}

addRows();


container.addEventListener ("mouseover",  e => {
    if (e.target.matches(".newDivs")){
        e.target.style.backgroundColor = "black";
    }
})