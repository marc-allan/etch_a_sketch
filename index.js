// CRIAR de forma dinâmica uma página com uma grid de 16x16 divs quadradas usando flexbox - FEITO
// CIAR efeito HOVER ao passar o mouse por cima dos divs - FEITO
// CRIAR mecanismo para redimensionar container conforme contidade de  - FEITO


let container = document.querySelector("div#container");
let inputDivs = document.querySelector("input#qtdDivs");
let addBtn = document.querySelector("input#addBtn");
let isMouseDown = false;


for(let i = 1; i <= 16**2; i++) {
    let newDivs = document.createElement("div");
    newDivs.className = "newDivs";
    container.append(newDivs);
}

// QUANTIDADE DIVS

addBtn.addEventListener ("click", ()=>{
    if (Number(inputDivs.value) < 1 || Number(inputDivs.value) >100) {
        alert("insira um valor entre 1 e 100")
    } else {
        container.innerHTML = "";
        let qtdDivs = Number(inputDivs.value)**2;
        console.log(qtdDivs);
        let divSize = 700 / Number(inputDivs.value)
        console.log(divSize)

        for(let i = 1; i <= qtdDivs; i++) {
            let newDivs = document.createElement("div");
            newDivs.className = "newDivs";
            newDivs.style.width = divSize + "px";
            newDivs.style.height = divSize + "px";
            container.append(newDivs);
    }}
})


// EFEITO HOVER
container.addEventListener ("mousedown",  e => {
    if (e.target.matches(".newDivs")){
        isMouseDown = true;
        e.target.style.backgroundColor = "black";
    }
})

container.addEventListener ("mousemove",  e => {
        if (e.target.matches(".newDivs")){
            if (isMouseDown){
            e.target.style.backgroundColor = "black";
            }
        }
})

container.addEventListener ("mouseup",  e => {
    isMouseDown = false;
})