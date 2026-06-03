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
const heartPack = {id:"hearts", label:"hearts", pack:[heart, heart, heart, heart, greenRupee, heart, heart, greenRupee], index:0};
const rupeePack = {id:"rupees", label:"rupees", pack:[blueRupee, greenRupee, blueRupee, redRupee, blueRupee, greenRupee, blueRupee, blueRupee], index:0};
const magicPack = {id:"magic", label:"magic", pack:[bigMagic, smallMagic, smallMagic, blueRupee, bigMagic, smallMagic, heart, smallMagic], index:0};
const bombPack = {id:"bombs", label:"bombs", pack:[oneBomb, oneBomb, oneBomb, fourBombs, oneBomb, oneBomb, eightBombs, oneBomb], index:0};
const arrowPack = {id:"arrows", label:"arrows", pack:[fiveArrows, heart, fiveArrows, tenArrows, fiveArrows, heart, fiveArrows, tenArrows], index:0};
const varietyPackOne = {id:"variety-1", label:"variety 1", pack:[smallMagic, greenRupee, heart, fiveArrows, smallMagic, oneBomb, greenRupee, heart], index:0};
const varietyPackTwo = {id:"variety-2", label:"variety 2", pack:[heart, fairy, bigMagic, redRupee, eightBombs, heart, redRupee, tenArrows], index:0};

const enemyPrizePacks = {
    "hearts": [
        {name:"Moblin", img:"https://alttp-wiki.net/images/8/87/Moblin.png"},
        {name:"Blue sword guard", img:"https://alttp-wiki.net/images/9/9d/Blue_sword_guard.png"},
        {name:"Green dagger guard", img:"https://alttp-wiki.net/images/4/4d/Green_dagger_guard.png"},
        {name:"Green sword guard", img:"https://alttp-wiki.net/images/3/38/Green_sword_guard.png"},
        {name:"Green spear guard", img:"https://alttp-wiki.net/images/b/bc/Green_spear_guard.png"},
        {name:"Usain Bolt", img:"https://alttp-wiki.net/images/4/49/Usain_Bolt.png"},
        {name:"Red spear and shield guard", img:"https://alttp-wiki.net/images/7/7c/Red_spear_and_shield_guard.png"},
        {name:"Blue tarosu", img:"https://alttp-wiki.net/images/5/53/Blue_tarosu.png"},
        {name:"Red tarosu", img:"https://alttp-wiki.net/images/6/6a/Red_tarosu.png"},
        {name:"Toppo", img:"https://alttp-wiki.net/images/4/4e/Toppo.png"},
        {name:"Snake", img:"https://alttp-wiki.net/images/5/5a/Snake.png"},
        {name:"Crab", img:"https://alttp-wiki.net/images/6/63/Crab.png"},
        {name:"Bush stal", img:"https://alttp-wiki.net/images/d/de/Bush_stal.png"},
        {name:"Quake slime", img:"https://alttp-wiki.net/images/2/20/Quake_slime.png"},
        {name:"Green leever", img:"https://alttp-wiki.net/images/2/27/Green_leever.png"},
        {name:"Purple leever", img:"https://alttp-wiki.net/images/2/2c/Purple_leever.png"},
        {name:"Wizzrobe", img:"https://alttp-wiki.net/images/5/55/Wizzrobe.png"},
        {name:"Skeletal wizzrobe", img:"https://alttp-wiki.net/images/c/c4/Skeletal_wizzrobe.png"},
        {name:"Green zirro", img:"https://alttp-wiki.net/images/2/22/Green_zirro.png"},
    ],
    "rupees": [
        {name:"Octorok", img:"https://alttp-wiki.net/images/b/b4/Octorok.png"},
        {name:"Mini moldorm", img:"https://alttp-wiki.net/images/4/4c/Mini_moldorm.png"},
        {name:"Popo", img:"https://alttp-wiki.net/images/8/88/Popo.png"},
        {name:"Ropa", img:"https://alttp-wiki.net/images/d/d8/Ropa.png"},
        {name:"Kyune", img:"https://alttp-wiki.net/images/e/e3/Kyune.png"},
        {name:"Pikit", img:"https://alttp-wiki.net/images/4/42/Pikit.png"},
        {name:"Red hardhat beetle", img:"https://alttp-wiki.net/images/5/5a/Red_hardhat_beetle.png"},
        {name:"Geldman", img:"https://alttp-wiki.net/images/6/67/Geldman.png"},
        {name:"Red devalant", img:"https://alttp-wiki.net/images/0/08/Red_devalant.png"},
        {name:"Blue devalant", img:"https://alttp-wiki.net/images/9/9f/Blue_devalant.png"},
        {name:"Ball-and-chain guard", img:"https://alttp-wiki.net/images/e/e8/Ball-and-chain_guard.png"},
        {name:"Rat", img:"https://alttp-wiki.net/images/8/8b/Rat.png"},
        {name:"Buzz", img:"https://alttp-wiki.net/images/4/4e/Buzz.png"},
        {name:"Hover", img:"https://alttp-wiki.net/images/f/f7/Hover.png"},
        {name:"Terrorpin", img:"https://alttp-wiki.net/images/4/44/Terrorpin.png"},
        {name:"Blue tektite", img:"https://alttp-wiki.net/images/5/56/Blue_tektite.png"},
        {name:"Red tektite", img:"https://alttp-wiki.net/images/6/6b/Red_tektite.png"},
    ],
    "magic": [
        {name:"Pengator", img:"https://alttp-wiki.net/images/8/8e/Pengator.png"},
        {name:"Buzzblob", img:"https://alttp-wiki.net/images/7/7f/Buzzblob.png"},
        {name:"Red spear guard", img:"https://alttp-wiki.net/images/8/80/Red_spear_guard.png"},
        {name:"Gibdo", img:"https://alttp-wiki.net/images/a/ad/Gibdo.png"},
    ],
    "bombs": [
        {name:"Floating stal", img:"https://alttp-wiki.net/images/8/8c/Floating_stal.png"},
        {name:"Hinox", img:"https://alttp-wiki.net/images/f/f7/Hinox.png"},
        {name:"Sluggula", img:"https://alttp-wiki.net/images/9/9e/Sluggula.png"},
        {name:"Bomb guard", img:"https://alttp-wiki.net/images/5/59/Bomb_guard.png"},
        {name:"Zora", img:"https://alttp-wiki.net/images/d/d5/Zora.png"},
        {name:"Ku", img:"https://alttp-wiki.net/images/d/d5/Ku.png"},
        {name:"Stalfos knight", img:"https://alttp-wiki.net/images/6/6c/Stalfos_knight.png"},
    ],
    "arrows": [
        {name:"Blue archer", img:"https://alttp-wiki.net/images/4/45/Blue_archer.png"},
        {name:"Green archer", img:"https://alttp-wiki.net/images/9/98/Green_archer.png"},
        {name:"Armos statue", img:"https://alttp-wiki.net/images/9/98/Armos_statue.png"},
        {name:"Green eyegore", img:"https://alttp-wiki.net/images/4/44/Green_eyegore.png"},
        {name:"Red eyegore", img:"https://alttp-wiki.net/images/8/86/Red_eyegore.png"},
        {name:"Green mimic", img:"https://alttp-wiki.net/images/b/b1/Green_mimic.png"},
        {name:"Red mimic", img:"https://alttp-wiki.net/images/4/4b/Red_mimic.png"},
    ],
    "variety-1": [
        {name:"Crow", img:"https://alttp-wiki.net/images/f/fa/Crow.png"},
        {name:"Vulture", img:"https://alttp-wiki.net/images/0/01/Vulture.png"},
        {name:"Poe", img:"https://alttp-wiki.net/images/6/63/Poe.png"},
        {name:"Hyu", img:"https://alttp-wiki.net/images/f/fb/Hyu.png"},
        {name:"Red bari", img:"https://alttp-wiki.net/images/4/46/Red_bari.png"},
        {name:"Blue bari", img:"https://alttp-wiki.net/images/3/35/Blue_bari.png"},
        {name:"Blue hardhat beetle", img:"https://alttp-wiki.net/images/4/4d/Blue_hardhat_beetle.png"},
        {name:"Red kodongo", img:"https://alttp-wiki.net/images/e/ec/Red_kodongo.png"},
        {name:"Green kodongo", img:"https://alttp-wiki.net/images/e/e2/Green_kodongo.png"},
        {name:"Green slime", img:"https://alttp-wiki.net/images/a/a8/Green_slime.png"},
        {name:"Red slime", img:"https://alttp-wiki.net/images/d/d6/Red_slime.png"},
        {name:"Yellow slime", img:"https://alttp-wiki.net/images/9/96/Yellow_slime.png"},
        {name:"Blue zazak", img:"https://alttp-wiki.net/images/a/a1/Blue_zazak.png"},
        {name:"Red zazak", img:"https://alttp-wiki.net/images/1/1d/Red_zazak.png"},
        {name:"Blue stalfos", img:"https://alttp-wiki.net/images/a/a9/Blue_stalfos.png"},
        {name:"Red stalfos", img:"https://alttp-wiki.net/images/9/9a/Red_stalfos.png"},
    ],
    "variety-2": [
        {name:"Snapdragon", img:"https://alttp-wiki.net/images/2/23/Snapdragon.png"},
        {name:"Mini helmasaur", img:"https://alttp-wiki.net/images/d/d3/Mini_helmasaur.png"},
        {name:"Bluesain Bolt", img:"https://alttp-wiki.net/images/a/a0/Bluesain_Bolt.png"},
        {name:"Red bush spear guard", img:"https://alttp-wiki.net/images/7/73/Red_bush_spear_guard.png"},
        {name:"Stalrope", img:"https://alttp-wiki.net/images/1/15/Stalrope.png"},
        {name:"Keese", img:"https://alttp-wiki.net/images/b/b1/Keese.png"},
        {name:"Floating stal", img:"https://alttp-wiki.net/images/8/8c/Floating_stal.png"},
        {name:"Yellow stalfos", img:"https://alttp-wiki.net/images/4/4d/Yellow_stalfos.png"},
        {name:"Blue zirro", img:"https://alttp-wiki.net/images/b/b0/Blue_zirro.png"},
        {name:"Pokey", img:"https://alttp-wiki.net/images/9/9e/Pokey.png"},
        {name:"Lynel", img:"https://alttp-wiki.net/images/f/f9/Lynel.png"},
    ],
};

const prizePacks = [
    heartPack,
    rupeePack,
    magicPack,
    bombPack,
    arrowPack,
    varietyPackOne,
    varietyPackTwo,
];

prizePacks.forEach((pack) => {
    pack.enemies = enemyPrizePacks[pack.id];
});

function createPackTable(prizePack){
    const packTableRow = document.createElement("tr");

    for (let i = 0; i < prizePack.pack.length; i++){
        const cell = document.createElement("td");
        cell.className = "packCell";
        cell.tabIndex = 0;
        cell.setAttribute("role", "button");
        cell.setAttribute("aria-label", `Set ${prizePack.label} pack to ${prizePack.pack[i].name}`);

        const cellImg = document.createElement("img");
        cellImg.setAttribute("src", prizePack.pack[i].img);
        cellImg.setAttribute("alt", prizePack.pack[i].name);

        cell.appendChild(cellImg);
        cell.addEventListener("click", () => updatePackTable(prizePack, i));
        cell.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                updatePackTable(prizePack, i);
            }
        });
        packTableRow.appendChild(cell);
    }
    const packTable = document.getElementById(prizePack.id);
    packTable.appendChild(packTableRow);
    packTable.rows[0].cells[0].classList.add("isCurrent");
}

function createEnemyPanel(prizePack){
    const enemySprites = document.createElement("div");
    enemySprites.className = "enemyPanel";
    enemySprites.setAttribute("aria-label", `Enemies for ${prizePack.label} prize pack`);

    prizePack.enemies.forEach((enemy) => {
        const sprite = document.createElement("img");
        sprite.src = enemy.img;
        sprite.alt = enemy.name;
        sprite.loading = "lazy";
        enemySprites.appendChild(sprite);
    });

    return enemySprites;
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
    const packTable = document.getElementById(pack.id);
    packTable.rows[0].cells[pack.index].classList.remove("isCurrent");
    pack.index = index;
    packTable.rows[0].cells[pack.index].classList.add("isCurrent");
}

function resetTables(){
    prizePacks.forEach((pack) => updatePackTable(pack, 0));
}

function toggleEnemyPanels(){
    const app = document.querySelector(".app");
    const shouldShowEnemies = !app.classList.contains("showEnemies");
    app.classList.toggle("showEnemies", shouldShowEnemies);

    const toggleButton = document.getElementById("toggleEnemiesButton");
    toggleButton.textContent = shouldShowEnemies ? "Hide enemies" : "Show enemies";
    toggleButton.setAttribute("aria-pressed", shouldShowEnemies.toString());
}

document.addEventListener("DOMContentLoaded", function() {
    prizePacks.forEach((pack) => {
        createPackTable(pack);

        const packGroup = document.querySelector(`[data-pack-id="${pack.id}"]`);
        const incrementButton = packGroup.querySelector('[data-action="increment"]');
        incrementButton.addEventListener("click", () => incrementPackTable(pack));
        packGroup.appendChild(createEnemyPanel(pack));
    });

    document.getElementById("resetButton").addEventListener("click", resetTables);
    document.getElementById("toggleEnemiesButton").addEventListener("click", toggleEnemyPanels);
});
