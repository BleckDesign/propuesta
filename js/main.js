const capa1 = document.getElementById("capa5");
const ruta1 = document.getElementById("rutas1");

const textbox = document.getElementById("textbox");

let numerodecargas;
let textinsert;

capa1.addEventListener('mouseover', function(){
    ruta1.style.display = "flex";
    for(let cargas in cargasmonterrey){
        const cargo = cargasmonterrey[cargas];
        const paragraph = document.createElement("h4");
        paragraph.textContent = `${cargo.unidad}`;
        textbox.appendChild(paragraph);
        const paragraph2 = document.createElement("h5");
        paragraph2.textContent = `${cargo.origen} a ${cargo.destino}`;
        textbox.appendChild(paragraph2);
        const paragraph3 = document.createElement("h6");
        paragraph3.textContent = `${cargo.peso}`;
        textbox.appendChild(paragraph3);
        const paragraph4 = document.createElement("p");
        paragraph4.textContent = `${cargo.material}`;
        textbox.appendChild(paragraph4);
    }
})

capa1.addEventListener('mouseout', function(){
    ruta1.style.display = "none";
    textbox.textContent = " ";
})

