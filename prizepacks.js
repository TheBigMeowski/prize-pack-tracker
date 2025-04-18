// We want an array of objects
// each object is an element in the prize pack array
// it will contain the name (e.g. "heart") and a link to the sprite image

// drops
const heart = {name:"heart", img:"assets/Heart.png"};
const greenRupee = {name:"rupee", img:"assets/Green_Rupee.png"};

// prize packs
const heartPack = {name: "hearts", pack:[heart, heart, heart, heart, greenRupee, heart, heart, greenRupee], index:0};

// TODO CSS nonsense
function createPackTable(prizePack){
    const packTableRow = document.createElement("tr");

    for (let i = 0; i < prizePack.pack.length; i++){
        // TODO somewhere in here make an onclick function to update heartPackIndex (but generalized)
        const cell = document.createElement("td");
        const cellImg = document.createElement("img");
        cellImg.setAttribute("src", prizePack.pack[i].img);
        cellImg.setAttribute("alt", prizePack.pack[i].name);
        cell.appendChild(cellImg);
        cell.onclick = function() {
            updatePackTable(heartPack, i);
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
    // TODO other pack tables
}

document.addEventListener("DOMContentLoaded", function() {
    createPackTable(heartPack);
});