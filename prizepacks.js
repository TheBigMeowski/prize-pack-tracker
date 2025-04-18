// drops
const heart = {name:"heart", img:"assets/Heart.png"};
const fairy = {name:"fairy", img:"assets/Fairy.png"};
const greenRupee = {name:"green rupee", img:"assets/Green_Rupee.png"};
const blueRupee = {name:"blue rupee", img:"assets/Blue_Rupee.png"};
const redRupee = {name:"red rupee", img:"assets/Red_Rupee.png"};
const smallMagic = {name:"small magic decanter", img:"assets/Small_Magic.png"};
const bigMagic = {name:"big magic decanter", img:"assets/Big_Magic.png"};
const fiveArrows = {name:"5 arrows", img:"assets/5_Arrows.png"};
const tenArrows = {name:"10 arrows", img:"assets/10_Arrows.png"};
const oneBomb = {name:"1 bomb", img:"assets/1_Bomb.png"};
const fourBombs = {name:"4 bombs", img: "assets/4_Bombs.png"};
const eightBombs = {name:"8 bombs", img: "assets/8_Bombs.png"};

// prize packs
const heartPack = {name:"hearts", pack:[heart, heart, heart, heart, greenRupee, heart, heart, greenRupee], index:0};
const rupeePack = {name:"rupees", pack:[blueRupee, greenRupee, blueRupee, redRupee, blueRupee, greenRupee, blueRupee, blueRupee], index:0};
const magicPack = {name:"magic", pack:[bigMagic, smallMagic, smallMagic, blueRupee, bigMagic, smallMagic, heart, smallMagic], index:0};
const bombPack = {name:"bombs", pack:[oneBomb, oneBomb, oneBomb, fourBombs, oneBomb, oneBomb, eightBombs, oneBomb], index:0};
const arrowPack = {name:"arrows", pack:[fiveArrows, heart, fiveArrows, tenArrows, fiveArrows, heart, fiveArrows, tenArrows], index:0};
const varietyPackOne = {name:"var 1", pack:[smallMagic, greenRupee, heart, fiveArrows, smallMagic, oneBomb, greenRupee, heart], index:0};
const varietyPackTwo = {name:"var 2", pack:[heart, fairy, bigMagic, redRupee, oneBomb, heart, redRupee, tenArrows], index:0};

// TODO CSS nonsense
function createPackTable(prizePack){
    const packTableRow = document.createElement("tr");

    for (let i = 0; i < prizePack.pack.length; i++){
        const cell = document.createElement("td");
        const cellImg = document.createElement("img");
        cellImg.setAttribute("src", prizePack.pack[i].img);
        cellImg.setAttribute("alt", prizePack.pack[i].name);
        cell.appendChild(cellImg);
        cell.onclick = function() {
            updatePackTable(prizePack, i);
        };
        packTableRow.appendChild(cell);
    }
    let packTable = document.getElementById(prizePack.name);
    packTable.appendChild(packTableRow);
    packTable.rows[0].cells[0].style.border = "5px solid red";
}

function incrementPackTable(pack){
    let newIndex = 0;
    if (pack.index >= pack.pack.length - 1) newIndex = 0;
    else newIndex = pack.index + 1;
    updatePackTable(pack, newIndex);
}

function decrementPackTable(pack){
    let newIndex = 0;
    if (pack.index <= 0) newIndex = pack.pack.length - 1;
    else newIndex = pack.index - 1;
    updatePackTable(pack, newIndex);
}

function updatePackTable(pack, index){
    document.getElementById(pack.name).rows[0].cells[pack.index].style.border = "none";
    pack.index = index;
    document.getElementById(pack.name).rows[0].cells[pack.index].style.border = "5px solid red";
}

function resetTables(){
    updatePackTable(heartPack, 0);
    updatePackTable(rupeePack, 0);
    updatePackTable(magicPack, 0);
    updatePackTable(bombPack, 0);
    updatePackTable(arrowPack, 0);
    updatePackTable(varietyPackOne, 0);
    updatePackTable(varietyPackTwo, 0);
}

document.addEventListener("DOMContentLoaded", function() {
    createPackTable(heartPack);
    createPackTable(rupeePack);
    createPackTable(magicPack);
    createPackTable(bombPack);
    createPackTable(arrowPack);
    createPackTable(varietyPackOne);
    createPackTable(varietyPackTwo);
});