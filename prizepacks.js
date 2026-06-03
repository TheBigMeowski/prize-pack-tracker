// drops
const heart = {name:"heart", img:"assets/drops/Heart.png"};
const fairy = {name:"fairy", img:"assets/drops/Fairy.png"};
const greenRupee = {name:"green rupee", img:"assets/drops/Green_Rupee.png"};
const blueRupee = {name:"blue rupee", img:"assets/drops/Blue_Rupee.png"};
const redRupee = {name:"red rupee", img:"assets/drops/Red_Rupee.png"};
const smallMagic = {name:"small magic decanter", img:"assets/drops/Small_Magic.png"};
const bigMagic = {name:"big magic decanter", img:"assets/drops/Big_Magic.png"};
const fiveArrows = {name:"5 arrows", img:"assets/drops/5_Arrows.png"};
const tenArrows = {name:"10 arrows", img:"assets/drops/10_Arrows.png"};
const oneBomb = {name:"1 bomb", img:"assets/drops/1_Bomb.png"};
const fourBombs = {name:"4 bombs", img: "assets/drops/4_Bombs.png"};
const eightBombs = {name:"8 bombs", img: "assets/drops/8_Bombs.png"};

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
        {name:"Moblin", img:"assets/enemies/Moblin.png"},
        {name:"Blue sword guard", img:"assets/enemies/Blue_sword_guard.png"},
        {name:"Green dagger guard", img:"assets/enemies/Green_dagger_guard.png"},
        {name:"Green sword guard", img:"assets/enemies/Green_sword_guard.png"},
        {name:"Green spear guard", img:"assets/enemies/Green_spear_guard.png"},
        {name:"Usain Bolt", img:"assets/enemies/Usain_Bolt.png"},
        {name:"Red spear and shield guard", img:"assets/enemies/Red_spear_and_shield_guard.png"},
        {name:"Blue tarosu", img:"assets/enemies/Blue_tarosu.png"},
        {name:"Red tarosu", img:"assets/enemies/Red_tarosu.png"},
        {name:"Toppo", img:"assets/enemies/Toppo.png"},
        {name:"Snake", img:"assets/enemies/Snake.png"},
        {name:"Crab", img:"assets/enemies/Crab.png"},
        {name:"Bush stal", img:"assets/enemies/Bush_stal.png"},
        {name:"Quake slime", img:"assets/enemies/Quake_slime.png"},
        {name:"Green leever", img:"assets/enemies/Green_leever.png"},
        {name:"Purple leever", img:"assets/enemies/Purple_leever.png"},
        {name:"Wizzrobe", img:"assets/enemies/Wizzrobe.png"},
        {name:"Skeletal wizzrobe", img:"assets/enemies/Skeletal_wizzrobe.png"},
        {name:"Green zirro", img:"assets/enemies/Green_zirro.png"},
    ],
    "rupees": [
        {name:"Octorok", img:"assets/enemies/Octorok.png"},
        {name:"Mini moldorm", img:"assets/enemies/Mini_moldorm.png"},
        {name:"Popo", img:"assets/enemies/Popo.png"},
        {name:"Ropa", img:"assets/enemies/Ropa.png"},
        {name:"Kyune", img:"assets/enemies/Kyune.png"},
        {name:"Pikit", img:"assets/enemies/Pikit.png"},
        {name:"Red hardhat beetle", img:"assets/enemies/Red_hardhat_beetle.png"},
        {name:"Geldman", img:"assets/enemies/Geldman.png"},
        {name:"Red devalant", img:"assets/enemies/Red_devalant.png"},
        {name:"Blue devalant", img:"assets/enemies/Blue_devalant.png"},
        {name:"Ball-and-chain guard", img:"assets/enemies/Ball-and-chain_guard.png"},
        {name:"Rat", img:"assets/enemies/Rat.png"},
        {name:"Buzz", img:"assets/enemies/Buzz.png"},
        {name:"Hover", img:"assets/enemies/Hover.png"},
        {name:"Terrorpin", img:"assets/enemies/Terrorpin.png"},
        {name:"Blue tektite", img:"assets/enemies/Blue_tektite.png"},
        {name:"Red tektite", img:"assets/enemies/Red_tektite.png"},
    ],
    "magic": [
        {name:"Pengator", img:"assets/enemies/Pengator.png"},
        {name:"Buzzblob", img:"assets/enemies/Buzzblob.png"},
        {name:"Red spear guard", img:"assets/enemies/Red_spear_guard.png"},
        {name:"Gibdo", img:"assets/enemies/Gibdo.png"},
    ],
    "bombs": [
        {name:"Floating stal", img:"assets/enemies/Floating_stal.png"},
        {name:"Hinox", img:"assets/enemies/Hinox.png"},
        {name:"Sluggula", img:"assets/enemies/Sluggula.png"},
        {name:"Bomb guard", img:"assets/enemies/Bomb_guard.png"},
        {name:"Zora", img:"assets/enemies/Zora.png"},
        {name:"Ku", img:"assets/enemies/Ku.png"},
        {name:"Stalfos knight", img:"assets/enemies/Stalfos_knight.png"},
    ],
    "arrows": [
        {name:"Blue archer", img:"assets/enemies/Blue_archer.png"},
        {name:"Green archer", img:"assets/enemies/Green_archer.png"},
        {name:"Armos statue", img:"assets/enemies/Armos_statue.png"},
        {name:"Green eyegore", img:"assets/enemies/Green_eyegore.png"},
        {name:"Red eyegore", img:"assets/enemies/Red_eyegore.png"},
        {name:"Green mimic", img:"assets/enemies/Green_mimic.png"},
        {name:"Red mimic", img:"assets/enemies/Red_mimic.png"},
    ],
    "variety-1": [
        {name:"Crow", img:"assets/enemies/Crow.png"},
        {name:"Vulture", img:"assets/enemies/Vulture.png"},
        {name:"Poe", img:"assets/enemies/Poe.png"},
        {name:"Hyu", img:"assets/enemies/Hyu.png"},
        {name:"Red bari", img:"assets/enemies/Red_bari.png"},
        {name:"Blue bari", img:"assets/enemies/Blue_bari.png"},
        {name:"Blue hardhat beetle", img:"assets/enemies/Blue_hardhat_beetle.png"},
        {name:"Red kodongo", img:"assets/enemies/Red_kodongo.png"},
        {name:"Green kodongo", img:"assets/enemies/Green_kodongo.png"},
        {name:"Green slime", img:"assets/enemies/Green_slime.png"},
        {name:"Red slime", img:"assets/enemies/Red_slime.png"},
        {name:"Yellow slime", img:"assets/enemies/Yellow_slime.png"},
        {name:"Blue zazak", img:"assets/enemies/Blue_zazak.png"},
        {name:"Red zazak", img:"assets/enemies/Red_zazak.png"},
        {name:"Blue stalfos", img:"assets/enemies/Blue_stalfos.png"},
        {name:"Red stalfos", img:"assets/enemies/Red_stalfos.png"},
    ],
    "variety-2": [
        {name:"Snapdragon", img:"assets/enemies/Snapdragon.png"},
        {name:"Mini helmasaur", img:"assets/enemies/Mini_helmasaur.png"},
        {name:"Bluesain Bolt", img:"assets/enemies/Bluesain_Bolt.png"},
        {name:"Red bush spear guard", img:"assets/enemies/Red_bush_spear_guard.png"},
        {name:"Stalrope", img:"assets/enemies/Stalrope.png"},
        {name:"Keese", img:"assets/enemies/Keese.png"},
        {name:"Floating stal", img:"assets/enemies/Floating_stal.png"},
        {name:"Yellow stalfos", img:"assets/enemies/Yellow_stalfos.png"},
        {name:"Blue zirro", img:"assets/enemies/Blue_zirro.png"},
        {name:"Pokey", img:"assets/enemies/Pokey.png"},
        {name:"Lynel", img:"assets/enemies/Lynel.png"},
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

function setEnemyPanelsVisible(shouldShowEnemies){
    const app = document.querySelector(".app");
    app.classList.toggle("showEnemies", shouldShowEnemies);

    const toggleButton = document.getElementById("toggleEnemiesButton");
    toggleButton.textContent = shouldShowEnemies ? "Hide enemies" : "Show enemies";
    toggleButton.setAttribute("aria-pressed", shouldShowEnemies.toString());
}

function toggleEnemyPanels(){
    const shouldShowEnemies = !document.querySelector(".app").classList.contains("showEnemies");
    setEnemyPanelsVisible(shouldShowEnemies);
}

function syncMobileEnemyState(){
    const mobilePortrait = window.matchMedia("(pointer: coarse) and (orientation: portrait)").matches;
    const mobileLandscape = window.matchMedia("(pointer: coarse) and (orientation: landscape)").matches;
    const toggleButton = document.getElementById("toggleEnemiesButton");

    if (mobilePortrait) {
        setEnemyPanelsVisible(false);
        toggleButton.disabled = true;
        toggleButton.innerHTML = "Enemies hidden<br>in portrait mode";
        toggleButton.setAttribute("aria-pressed", "false");
        return;
    }

    if (mobileLandscape) {
        setEnemyPanelsVisible(true);
        toggleButton.disabled = true;
        toggleButton.innerHTML = "Enemies shown<br>in landscape mode";
        toggleButton.setAttribute("aria-pressed", "true");
        return;
    }

    toggleButton.disabled = false;
    setEnemyPanelsVisible(document.querySelector(".app").classList.contains("showEnemies"));
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
    syncMobileEnemyState();
    window.addEventListener("resize", syncMobileEnemyState);
    window.addEventListener("orientationchange", syncMobileEnemyState);
});
