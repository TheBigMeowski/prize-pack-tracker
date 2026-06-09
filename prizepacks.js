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

const coreKeyBindings = [
    {id:"selectPrevious", action:"Select Previous Prize Pack", key:"ArrowUp", label:"Up Arrow"},
    {id:"selectNext", action:"Select Next Prize Pack", key:"ArrowDown", label:"Down Arrow"},
    {id:"incrementCounter", action:"Increment Prize Pack Counter", key:"ArrowRight", label:"Right Arrow"},
    {id:"decrementCounter", action:"Decrement Prize Pack Counter", key:"ArrowLeft", label:"Left Arrow"},
];

const utilityKeyBindings = [
    {id:"resetTracker", action:"Reset", key:null, label:"None"},
    {id:"toggleEnemies", action:"Toggle Enemies", key:null, label:"None"},
];

const randoCoreKeyBindings = [
    {id:"randoSelectPrevious", action:"Select Previous Enemy Group", key:"ArrowUp", label:"Up Arrow"},
    {id:"randoSelectNext", action:"Select Next Enemy Group", key:"ArrowDown", label:"Down Arrow"},
    {id:"randoOpenEnemyMenu", action:"Open Enemy Group Menu", key:"ArrowRight", label:"Right Arrow"},
    {id:"randoCloseEnemyMenu", action:"Close Enemy Group Menu", key:"ArrowLeft", label:"Left Arrow"},
    {id:"randoResetTracker", action:"Reset", key:null, label:"None"},
    {id:"randoClearSelectedEnemyGroup", action:"Clear Selected Enemy Group", key:"0", label:"0"},
];

const controlsStorageKey = "prizePackTracker.controls.v2";
const trackerModes = {
    speedrun: {
        title:"ALTTP Prize Pack Tracker",
    },
    rando: {
        title:"ALTTPR Prize Pack Tracker",
    },
};
const defaultBindings = new Map();

const selectPackBindings = prizePacks.map((pack, index) => ({
    id:`selectPack${index + 1}`,
    action:`Select Prize Pack ${index + 1} (${formatPackName(pack.label)})`,
    key:String(index + 1),
    label:String(index + 1),
    packIndex:index,
    behavior:"select",
}));

const selectAndIncrementPackBindings = prizePacks.map((pack, index) => ({
    id:`selectIncrementPack${index + 1}`,
    action:`Increment Prize Pack ${index + 1} (${formatPackName(pack.label)})`,
    key:String(index + 1),
    label:String(index + 1),
    packIndex:index,
    behavior:"selectAndIncrement",
}));

const eitherSelectPackBindings = prizePacks.map((pack, index) => ({
    id:`eitherSelectPack${index + 1}`,
    action:`Select Prize Pack ${index + 1} (${formatPackName(pack.label)})`,
    key:String(index + 1),
    label:String(index + 1),
    packIndex:index,
    behavior:"select",
}));

const eitherIncrementDefaults = ["q", "w", "e", "r", "t", "y", "u"];
const eitherIncrementPackBindings = prizePacks.map((pack, index) => ({
    id:`eitherIncrementPack${index + 1}`,
    action:`Increment Prize Pack ${index + 1} (${formatPackName(pack.label)})`,
    key:eitherIncrementDefaults[index],
    label:eitherIncrementDefaults[index].toUpperCase(),
    packIndex:index,
    behavior:"selectAndIncrement",
}));

const randoEnemyGroupBindings = prizePacks.map((pack, index) => ({
    id:`randoEnemyGroup${index + 1}`,
    action:`Change to Enemy Group ${index + 1}`,
    key:String(index + 1),
    label:String(index + 1),
    enemyGroupIndex:index,
}));

[
    ...coreKeyBindings,
    ...utilityKeyBindings,
    ...randoCoreKeyBindings,
    ...randoEnemyGroupBindings,
    ...selectPackBindings,
    ...selectAndIncrementPackBindings,
    ...eitherSelectPackBindings,
    ...eitherIncrementPackBindings,
].forEach((binding) => {
    defaultBindings.set(binding.id, {key:binding.key, label:binding.label});
});

const selectionModes = {
    selectAndIncrement: {
        label:"Increment",
        bindings:selectAndIncrementPackBindings,
    },
    select: {
        label:"Select",
        bindings:selectPackBindings,
    },
    either: {
        label:"Either",
        bindings:[
            ...eitherSelectPackBindings,
            ...eitherIncrementPackBindings,
        ],
    },
    none: {
        label:"None",
        bindings:[],
    },
};

let selectionMode = "selectAndIncrement";

function getAllKeyBindings(){
    return [
        ...coreKeyBindings,
        ...utilityKeyBindings,
        ...randoCoreKeyBindings,
        ...randoEnemyGroupBindings,
        ...selectPackBindings,
        ...selectAndIncrementPackBindings,
        ...eitherSelectPackBindings,
        ...eitherIncrementPackBindings,
    ];
}

function getActiveKeyBindings(){
    if (trackerMode === "rando") {
        return [
            ...randoCoreKeyBindings,
            ...randoEnemyGroupBindings,
        ];
    }

    return [
        ...coreKeyBindings,
        ...utilityKeyBindings,
        ...selectionModes[selectionMode].bindings,
    ];
}

function setSelectionMode(nextMode){
    if (!selectionModes[nextMode]) return;

    selectionMode = nextMode;
    pendingRebindId = null;
    saveControlsSettings();
    renderControlsMenu();
}

function resetControlsToDefault(){
    getAllKeyBindings().forEach((binding) => {
        const defaults = defaultBindings.get(binding.id);
        binding.key = defaults.key;
        binding.label = defaults.label;
    });

    selectionMode = "selectAndIncrement";
    pendingRebindId = null;
    saveControlsSettings();
    renderControlsMenu();
}

let selectedPrizePackIndex = 0;
let showSelectedPrizePack = false;
let pendingRebindId = null;
let controlsCloseTimer = null;
let enemyPanelResizeObserver = null;
let trackerMode = getInitialTrackerMode();
let activeRandoEnemyRow = null;
let selectedRandoMenuOptionIndex = 0;
const randoEnemyAssignments = Array(prizePacks.length).fill(null);

prizePacks.forEach((pack) => {
    pack.enemies = enemyPrizePacks[pack.id];
});

function getInitialTrackerMode(){
    const mode = new URLSearchParams(window.location.search).get("mode");
    return trackerModes[mode] ? mode : "speedrun";
}

function preventMouseFocus(event){
    if (event.button !== 0) return;

    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    event.preventDefault();
}

function hideSelectedPrizePack(){
    showSelectedPrizePack = false;
    document.querySelector(".packGroup.isSelected")?.classList.remove("isSelected");
    if (trackerMode === "rando") {
        refreshEnemyPanels();
    }
}

function handleDocumentMouseDown(event){
    if (event.button !== 0) return;
    if (event.target instanceof Element && event.target.closest(".footerActions button")) return;
    if (event.target instanceof Element && event.target.closest(".enemyPanel, .randoEnemyMenu")) return;

    hideSelectedPrizePack();
}

function formatPackName(label){
    return label
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

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
        cell.addEventListener("mousedown", preventMouseFocus);
        cell.addEventListener("click", (event) => {
            event.stopPropagation();
            if (trackerMode === "rando") return;

            selectPrizePack(prizePacks.indexOf(prizePack));
            updatePackTable(prizePack, i);
        });
        cell.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                if (trackerMode === "rando") return;

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
    enemySprites.dataset.packId = prizePack.id;
    enemySprites.dataset.rowIndex = String(prizePacks.indexOf(prizePack));
    enemySprites.setAttribute("aria-label", `Enemies for ${prizePack.label} prize pack`);
    enemySprites.setAttribute("role", "button");
    enemySprites.tabIndex = -1;

    renderEnemyPanel(enemySprites, prizePack);

    enemySprites.addEventListener("mousedown", preventMouseFocus);
    enemySprites.addEventListener("click", (event) => {
        if (trackerMode !== "rando") return;

        event.stopPropagation();
        const rowIndex = Number(enemySprites.dataset.rowIndex);
        selectPrizePack(rowIndex, true);
        toggleRandoEnemyMenu(rowIndex);
    });
    enemySprites.addEventListener("keydown", (event) => {
        if (trackerMode !== "rando" || (event.key !== "Enter" && event.key !== " ")) return;

        event.preventDefault();
        const rowIndex = Number(enemySprites.dataset.rowIndex);
        selectPrizePack(rowIndex, true);
        toggleRandoEnemyMenu(rowIndex);
    });

    return enemySprites;
}

function createEnemyImage(enemy){
    const sprite = document.createElement("img");
    sprite.src = enemy.img;
    sprite.alt = enemy.name;
    sprite.loading = "lazy";
    return sprite;
}

function renderEnemyGroup(panel, enemies){
    enemies.forEach((enemy) => {
        panel.appendChild(createEnemyImage(enemy));
    });
}

function renderEnemyPanel(panel, prizePack){
    panel.replaceChildren();

    const rowIndex = Number(panel.dataset.rowIndex);
    if (trackerMode === "rando") {
        const assignedPackId = randoEnemyAssignments[rowIndex];
        panel.classList.toggle("isUnknown", !assignedPackId);
        panel.tabIndex = 0;
        panel.setAttribute("aria-pressed", (showSelectedPrizePack && selectedPrizePackIndex === rowIndex).toString());

        if (!assignedPackId) {
            const unknown = document.createElement("span");
            unknown.className = "enemyUnknown";
            unknown.textContent = "?";
            panel.appendChild(unknown);
            return;
        }

        renderEnemyGroup(panel, enemyPrizePacks[assignedPackId]);
        return;
    }

    panel.classList.remove("isUnknown");
    panel.removeAttribute("aria-pressed");
    panel.tabIndex = -1;
    renderEnemyGroup(panel, prizePack.enemies);
}

function refreshEnemyPanels(){
    document.querySelectorAll(".enemyPanel").forEach((panel) => {
        const prizePack = prizePacks.find((pack) => pack.id === panel.dataset.packId);
        if (!prizePack) return;

        renderEnemyPanel(panel, prizePack);
    });
    scheduleEnemySpriteSizeUpdate();
}

function createRandoEnemyMenu(){
    const menu = document.createElement("div");
    menu.id = "randoEnemyMenu";
    menu.className = "randoEnemyMenu";
    menu.setAttribute("aria-label", "Choose enemy group");
    menu.setAttribute("aria-hidden", "true");

    const unknownOption = document.createElement("button");
    unknownOption.type = "button";
    unknownOption.className = "randoEnemyOption isUnknown";
    unknownOption.dataset.optionIndex = "0";
    unknownOption.setAttribute("aria-label", "Assign unknown enemy group");
    unknownOption.addEventListener("mousedown", preventMouseFocus);
        unknownOption.addEventListener("click", (event) => {
        event.stopPropagation();
        selectedRandoMenuOptionIndex = 0;
        closeRandoEnemyMenu();
        hideSelectedPrizePack();
    });

    const unknown = document.createElement("span");
    unknown.className = "enemyUnknown";
    unknown.textContent = "?";
    unknownOption.appendChild(unknown);
    menu.appendChild(unknownOption);

    prizePacks.forEach((pack, index) => {
        const option = document.createElement("button");
        option.type = "button";
        option.className = "randoEnemyOption";
        option.dataset.packId = pack.id;
        option.dataset.optionIndex = String(index + 1);
        option.setAttribute("aria-label", `Assign ${formatPackName(pack.label)} enemy group`);
        option.addEventListener("mousedown", preventMouseFocus);
        option.addEventListener("click", (event) => {
            event.stopPropagation();
            selectedRandoMenuOptionIndex = index + 1;
            closeRandoEnemyMenu();
            hideSelectedPrizePack();
        });

        renderEnemyGroup(option, pack.enemies);
        menu.appendChild(option);
    });

    return menu;
}

function toggleRandoEnemyMenu(rowIndex){
    if (activeRandoEnemyRow === rowIndex) {
        closeRandoEnemyMenu(false);
        hideSelectedPrizePack();
        return;
    }

    openRandoEnemyMenu(rowIndex);
}

function openRandoEnemyMenu(rowIndex){
    activeRandoEnemyRow = rowIndex;
    selectedRandoMenuOptionIndex = getRandoMenuOptionIndexForRow(rowIndex);
    const menu = document.getElementById("randoEnemyMenu");
    menu?.classList.add("isOpen");
    menu?.setAttribute("aria-hidden", "false");
    refreshEnemyPanels();
    renderRandoEnemyMenu();
}

function getRandoMenuOptionIndexForRow(rowIndex){
    const assignedPackId = randoEnemyAssignments[rowIndex];
    if (!assignedPackId) return 0;

    const packIndex = prizePacks.findIndex((pack) => pack.id === assignedPackId);
    return packIndex === -1 ? 0 : packIndex + 1;
}

function closeRandoEnemyMenu(shouldCommitSelection = true){
    if (activeRandoEnemyRow === null) return;

    if (shouldCommitSelection) {
        commitRandoEnemyMenuSelection();
    }
    activeRandoEnemyRow = null;
    const menu = document.getElementById("randoEnemyMenu");
    menu?.classList.remove("isOpen");
    menu?.setAttribute("aria-hidden", "true");
    refreshEnemyPanels();
}

function commitRandoEnemyMenuSelection(){
    if (activeRandoEnemyRow === null) return;

    if (selectedRandoMenuOptionIndex === 0) {
        randoEnemyAssignments[activeRandoEnemyRow] = null;
        return;
    }

    assignRandoEnemyGroupToRow(activeRandoEnemyRow, selectedRandoMenuOptionIndex - 1);
}

function selectPreviousRandoMenuGroup(){
    selectedRandoMenuOptionIndex = (selectedRandoMenuOptionIndex + prizePacks.length) % (prizePacks.length + 1);
    renderRandoEnemyMenu();
}

function selectNextRandoMenuGroup(){
    selectedRandoMenuOptionIndex = (selectedRandoMenuOptionIndex + 1) % (prizePacks.length + 1);
    renderRandoEnemyMenu();
}

function assignRandoEnemyGroupToRow(rowIndex, enemyGroupIndex){
    const assignedPackId = prizePacks[enemyGroupIndex].id;
    const previousRow = randoEnemyAssignments.findIndex((packId) => packId === assignedPackId);

    if (previousRow !== -1 && previousRow !== rowIndex) {
        randoEnemyAssignments[previousRow] = null;
    }

    randoEnemyAssignments[rowIndex] = assignedPackId;
    refreshEnemyPanels();
    renderRandoEnemyMenu();
}

function resetRandoEnemyAssignments(){
    randoEnemyAssignments.fill(null);
    closeRandoEnemyMenu(false);
    refreshEnemyPanels();
    renderRandoEnemyMenu();
}

function clearSelectedRandoEnemyGroup(){
    randoEnemyAssignments[selectedPrizePackIndex] = null;
    closeRandoEnemyMenu(false);
    refreshEnemyPanels();
    renderRandoEnemyMenu();
}

function updateModeSwitch(){
    document.querySelectorAll(".modeSwitchButton").forEach((button) => {
        const isActive = button.dataset.mode === trackerMode;
        button.setAttribute("aria-pressed", isActive.toString());
    });
}

function setTrackerMode(nextMode){
    if (!trackerModes[nextMode]) return;

    trackerMode = nextMode;
    const app = document.querySelector(".app");
    const title = trackerModes[trackerMode].title;
    app.classList.toggle("randoMode", trackerMode === "rando");
    document.title = `${title} by Meowski`;
    document.getElementById("appTitle").textContent = title;
    closeRandoEnemyMenu();
    updateModeSwitch();

    if (trackerMode === "rando") {
        setEnemyPanelsVisible(true);
    } else {
        setEnemyPanelsVisible(app.classList.contains("showEnemies"));
    }

    refreshEnemyPanels();
}

function bindModeSwitch(){
    document.querySelectorAll(".modeSwitchButton").forEach((button) => {
        button.addEventListener("mousedown", preventMouseFocus);
        button.addEventListener("click", () => setTrackerMode(button.dataset.mode));
    });
}

function handleRandoDocumentClick(event){
    if (trackerMode !== "rando" || activeRandoEnemyRow === null) return;
    if (event.target instanceof Element && event.target.closest(".enemyPanel, .randoEnemyMenu")) return;

    closeRandoEnemyMenu(false);
}

function handleRandoDocumentKeydown(event){
    if (event.key !== "Escape" || trackerMode !== "rando" || activeRandoEnemyRow === null) return false;

    closeRandoEnemyMenu();
    return true;
}

function syncRandoMenuHighlights(){
    const menu = document.getElementById("randoEnemyMenu");
    if (!menu) return;

    menu.querySelectorAll(".randoEnemyOption").forEach((option) => {
        const optionIndex = Number(option.dataset.optionIndex);
        option.classList.toggle("isAssigned", randoEnemyAssignments.includes(option.dataset.packId));
        option.classList.toggle("isSelected", activeRandoEnemyRow !== null && optionIndex === selectedRandoMenuOptionIndex);
        option.setAttribute("aria-current", activeRandoEnemyRow !== null && optionIndex === selectedRandoMenuOptionIndex ? "true" : "false");
    });
}

function renderRandoEnemyMenu(){
    syncRandoMenuHighlights();
}

function getPixelValue(value){
    const parsedValue = Number.parseFloat(value);
    return Number.isFinite(parsedValue) ? parsedValue : 0;
}

function getResolvedCssLength(element, propertyName){
    const rawValue = window.getComputedStyle(element).getPropertyValue(propertyName).trim();

    if (!rawValue) return 0;
    if (/^-?\d*\.?\d+px$/.test(rawValue)) return getPixelValue(rawValue);

    const probe = document.createElement("div");
    probe.style.position = "absolute";
    probe.style.visibility = "hidden";
    probe.style.pointerEvents = "none";
    probe.style.width = rawValue;
    document.body.appendChild(probe);

    const resolvedValue = getPixelValue(window.getComputedStyle(probe).width);
    probe.remove();

    return resolvedValue;
}

function getEnemyPanelContentBox(panel){
    const styles = window.getComputedStyle(panel);

    return {
        width: panel.clientWidth - getPixelValue(styles.paddingLeft) - getPixelValue(styles.paddingRight),
        height: panel.clientHeight - getPixelValue(styles.paddingTop) - getPixelValue(styles.paddingBottom),
    };
}

function getEnemyPanelGap(panel){
    const styles = window.getComputedStyle(panel);
    const rowGap = getPixelValue(styles.rowGap);
    const columnGap = getPixelValue(styles.columnGap);

    return {
        row: rowGap,
        column: columnGap,
    };
}

function getEnemySpriteDefaultSize(panel){
    return getResolvedCssLength(panel, "--enemy-size");
}

function getEnemySpriteOneRowSize(panel){
    return getResolvedCssLength(panel, "--enemy-one-row-size");
}

function getEnemySizeForColumns(contentBox, gap, columns, rows){
    const widthForSprite = (contentBox.width - (gap.column * (columns - 1))) / columns;
    const heightForSprite = (contentBox.height - (gap.row * (rows - 1))) / rows;

    return Math.max(1, Math.floor(Math.min(widthForSprite, heightForSprite)));
}

function getBestEnemyLayout(panel){
    const enemyCount = panel.children.length;
    const contentBox = getEnemyPanelContentBox(panel);

    if (!enemyCount || contentBox.width <= 0 || contentBox.height <= 0) return null;

    const gap = getEnemyPanelGap(panel);
    const defaultSize = getEnemySpriteDefaultSize(panel);
    const oneRowSize = getEnemySpriteOneRowSize(panel) || defaultSize;

    if (defaultSize <= 0) return null;

    const oneRowFitSize = getEnemySizeForColumns(contentBox, gap, enemyCount, 1);

    if (oneRowFitSize >= defaultSize) {
        return {
            columns: enemyCount,
            lastRowOffset: 0,
            size: Math.min(oneRowSize, oneRowFitSize),
        };
    }

    const twoRowColumns = Math.ceil(enemyCount / 2);
    const secondRowCount = enemyCount - twoRowColumns;
    const twoRowSize = getEnemySizeForColumns(contentBox, gap, twoRowColumns, 2);
    const fittedTwoRowSize = defaultSize ? Math.min(defaultSize, twoRowSize) : twoRowSize;
    const lastRowOffset = secondRowCount > 0 && secondRowCount < twoRowColumns
        ? (fittedTwoRowSize + gap.column) / 2
        : 0;

    return {
        columns: twoRowColumns,
        lastRowOffset,
        size: fittedTwoRowSize,
    };
}

function resetEnemySpriteOffsets(panel){
    Array.from(panel.children).forEach((sprite) => {
        sprite.style.removeProperty("transform");
    });
}

function offsetEnemyPanelLastRow(panel, layout){
    resetEnemySpriteOffsets(panel);

    if (!layout.lastRowOffset) return;

    Array.from(panel.children)
        .slice(layout.columns)
        .forEach((sprite) => {
            sprite.style.transform = `translateX(${layout.lastRowOffset}px)`;
        });
}

function updateEnemySpriteSizes(){
    document.querySelectorAll(".enemyPanel, .randoEnemyOption").forEach((panel) => {
        const layout = getBestEnemyLayout(panel);

        if (!layout) {
            panel.style.removeProperty("--fitted-enemy-size");
            panel.style.removeProperty("grid-template-columns");
            panel.style.removeProperty("grid-auto-rows");
            resetEnemySpriteOffsets(panel);
            return;
        }

        panel.style.setProperty("--fitted-enemy-size", `${layout.size}px`);
        panel.style.gridTemplateColumns = `repeat(${layout.columns}, ${layout.size}px)`;
        panel.style.gridAutoRows = `${layout.size}px`;
        offsetEnemyPanelLastRow(panel, layout);
    });
}

function scheduleEnemySpriteSizeUpdate(){
    window.requestAnimationFrame(updateEnemySpriteSizes);
}

function observeEnemyPanel(panel){
    if (!("ResizeObserver" in window)) return;
    if (!enemyPanelResizeObserver) {
        enemyPanelResizeObserver = new ResizeObserver(scheduleEnemySpriteSizeUpdate);
    }

    enemyPanelResizeObserver.observe(panel);
}

function incrementPackTable(pack){
    let newIndex = 0;
    if (pack.index >= pack.pack.length - 1) newIndex = 0;
    else newIndex = pack.index + 1;
    updatePackTable(pack, newIndex);
}

function incrementPackFromButton(pack){
    if (trackerMode === "rando") return;

    selectPrizePack(prizePacks.indexOf(pack));
    incrementPackTable(pack);
}

function bindIncrementButton(button, pack){
    button.addEventListener("pointerup", (event) => {
        if (event.pointerType !== "touch") return;

        event.preventDefault();
        event.stopPropagation();
        button.dataset.suppressClickUntil = String(Date.now() + 450);
        incrementPackFromButton(pack);
    });

    button.addEventListener("click", (event) => {
        event.stopPropagation();

        if (Date.now() < Number(button.dataset.suppressClickUntil || 0)) {
            event.preventDefault();
            return;
        }

        incrementPackFromButton(pack);
    });
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

function revealSelectedPrizePack(){
    showSelectedPrizePack = true;
    document.querySelector(`[data-pack-id="${getSelectedPrizePack().id}"]`)?.classList.add("isSelected");
}

function selectPrizePack(index, shouldShowSelection = showSelectedPrizePack){
    const normalizedIndex = (index + prizePacks.length) % prizePacks.length;
    const previousPack = prizePacks[selectedPrizePackIndex];
    const nextPack = prizePacks[normalizedIndex];

    document.querySelector(`[data-pack-id="${previousPack.id}"]`)?.classList.remove("isSelected");
    selectedPrizePackIndex = normalizedIndex;
    showSelectedPrizePack = shouldShowSelection;

    if (shouldShowSelection) {
        document.querySelector(`[data-pack-id="${nextPack.id}"]`)?.classList.add("isSelected");
    }

    if (trackerMode === "rando") {
        refreshEnemyPanels();
    }
}

function getSelectedPrizePack(){
    return prizePacks[selectedPrizePackIndex];
}

function resetTables(){
    prizePacks.forEach((pack) => updatePackTable(pack, 0));
}

function resetTracker(){
    if (trackerMode === "rando") {
        resetRandoEnemyAssignments();
        return;
    }

    resetTables();
}

function setEnemyPanelsVisible(shouldShowEnemies){
    const app = document.querySelector(".app");
    const nextShowEnemies = trackerMode === "rando" ? true : shouldShowEnemies;
    app.classList.toggle("showEnemies", nextShowEnemies);
    scheduleEnemySpriteSizeUpdate();

    const toggleButton = document.getElementById("toggleEnemiesButton");
    toggleButton.textContent = nextShowEnemies ? "Hide Enemies" : "Show Enemies";
    toggleButton.setAttribute("aria-pressed", nextShowEnemies.toString());

    if (app.classList.contains("showControls")) {
        renderControlsMenu();
    }
}

function toggleEnemyPanels(){
    if (trackerMode === "rando") return;

    const shouldShowEnemies = !document.querySelector(".app").classList.contains("showEnemies");
    setEnemyPanelsVisible(shouldShowEnemies);
}

function renderControlsMenu(){
    const controlsList = document.getElementById("controlsList");
    controlsList.replaceChildren();

    getActiveKeyBindings().forEach((binding) => {
        const action = document.createElement("div");
        action.className = "controlAction";
        action.textContent = getBindingActionLabel(binding);

        const key = document.createElement("button");
        key.type = "button";
        key.className = "controlBind";
        key.dataset.bindingId = binding.id;
        key.textContent = pendingRebindId === binding.id ? "Press key" : binding.label;
        key.setAttribute("aria-label", `Rebind ${binding.action}`);
        key.setAttribute("aria-pressed", (pendingRebindId === binding.id).toString());
        key.addEventListener("click", () => startRebind(binding.id));

        controlsList.append(action, key);

        if (binding.id === "toggleEnemies") {
            controlsList.append(createSelectionModeLabel(), createSelectionModeSelect());
        }
    });

    controlsList.append(createResetControlsButton());
}

function getBindingActionLabel(binding){
    return binding.action;
}

function createSelectionModeLabel(){
    const label = document.createElement("div");
    label.className = "controlAction controlActionWithTooltip";
    label.tabIndex = 0;

    const labelText = document.createElement("span");
    labelText.textContent = "Targeted Selection Behavior";

    const indicator = document.createElement("span");
    indicator.className = "controlTooltipIndicator";
    indicator.textContent = "?";
    indicator.setAttribute("aria-hidden", "true");

    const tooltip = createSelectionModeTooltip();

    label.append(labelText, indicator, tooltip);
    return label;
}

function createResetControlsButton(){
    const button = document.createElement("button");
    button.type = "button";
    button.className = "resetControlsButton";
    button.textContent = "Reset Settings to Default";
    button.addEventListener("click", resetControlsToDefault);
    return button;
}

function createSelectionModeTooltip(){
    const tooltip = document.createElement("div");
    tooltip.className = "controlTooltip";
    tooltip.setAttribute("role", "tooltip");

    tooltip.append(
        createTooltipLine("Increment", `pressing ${getTooltipKey("selectIncrementPack1")} selects and increments the Hearts pack`),
        createTooltipLine("Select", `pressing ${getTooltipKey("selectPack1")} selects the Hearts pack`),
        createTooltipLine("Either", `pressing ${getTooltipKey("eitherSelectPack1")} selects the Hearts pack, while pressing ${getTooltipKey("eitherIncrementPack1")} selects and increments the Hearts pack`),
    );

    return tooltip;
}

function createTooltipLine(mode, copy){
    const line = document.createElement("p");
    const modeName = document.createElement("strong");
    modeName.textContent = mode;
    line.append(modeName, `: ${copy}`);
    return line;
}

function getTooltipKey(bindingId){
    const binding = [
        ...selectPackBindings,
        ...selectAndIncrementPackBindings,
        ...eitherSelectPackBindings,
        ...eitherIncrementPackBindings,
    ].find((candidate) => candidate.id === bindingId);

    return binding?.label || "None";
}

function createSelectionModeSelect(){
    const select = document.createElement("select");
    select.id = "selectionModeSelect";
    select.className = "controlSelect";

    Object.entries(selectionModes).forEach(([mode, config]) => {
        const option = document.createElement("option");
        option.value = mode;
        option.textContent = config.label;
        option.selected = mode === selectionMode;
        select.appendChild(option);
    });

    select.addEventListener("change", (event) => setSelectionMode(event.target.value));
    return select;
}

function startRebind(bindingId){
    pendingRebindId = pendingRebindId === bindingId ? null : bindingId;
    renderControlsMenu();
}

function normalizeKeyLabel(key){
    const labels = {
        ArrowUp:"Up Arrow",
        ArrowDown:"Down Arrow",
        ArrowRight:"Right Arrow",
        ArrowLeft:"Left Arrow",
        " ":"Space",
    };

    if (key === null) return "None";
    return labels[key] || (key.length === 1 ? key.toUpperCase() : key);
}

function serializeControlsSettings(){
    const bindings = {};

    getAllKeyBindings().forEach((binding) => {
        bindings[binding.id] = binding.key;
    });

    return {
        version:2,
        selectionMode,
        bindings,
    };
}

function saveControlsSettings(){
    try {
        localStorage.setItem(controlsStorageKey, JSON.stringify(serializeControlsSettings()));
    } catch (error) {
        console.warn("Unable to save controls settings.", error);
    }
}

function applySavedBinding(binding, key){
    binding.key = key;
    binding.label = normalizeKeyLabel(key);
}

function removeDuplicateKeys(bindings){
    const usedKeys = new Set();

    bindings.forEach((binding) => {
        if (!binding.key) return;

        if (usedKeys.has(binding.key)) {
            applySavedBinding(binding, null);
            return;
        }

        usedKeys.add(binding.key);
    });
}

function sanitizeControlBindings(){
    Object.keys(selectionModes).forEach((mode) => {
        removeDuplicateKeys([
            ...coreKeyBindings,
            ...utilityKeyBindings,
            ...selectionModes[mode].bindings,
        ]);
    });

    removeDuplicateKeys([
        ...randoCoreKeyBindings,
        ...randoEnemyGroupBindings,
    ]);
}

function loadControlsSettings(){
    let savedSettings = null;

    try {
        savedSettings = JSON.parse(localStorage.getItem(controlsStorageKey));
    } catch (error) {
        console.warn("Unable to load controls settings.", error);
        return;
    }

    if (!savedSettings || savedSettings.version !== 2 || !savedSettings.bindings || typeof savedSettings.bindings !== "object") return;

    if (selectionModes[savedSettings.selectionMode]) {
        selectionMode = savedSettings.selectionMode;
    }

    getAllKeyBindings().forEach((binding) => {
        if (!Object.prototype.hasOwnProperty.call(savedSettings.bindings, binding.id)) return;

        const savedKey = savedSettings.bindings[binding.id];
        if (savedKey !== null && typeof savedKey !== "string") return;

        applySavedBinding(binding, savedKey);
    });

    sanitizeControlBindings();
}

function rebindControl(event){
    if (!pendingRebindId) return false;

    if (event.key === "Escape") {
        const currentBinding = getActiveKeyBindings().find((binding) => binding.id === pendingRebindId);
        currentBinding.key = null;
        currentBinding.label = "None";
        pendingRebindId = null;
        saveControlsSettings();
        renderControlsMenu();
        return true;
    }

    const reservedKeys = ["Alt", "Control", "Meta", "Shift", "Tab"];
    if (reservedKeys.includes(event.key)) return true;

    const activeBindings = getActiveKeyBindings();
    const currentBinding = activeBindings.find((binding) => binding.id === pendingRebindId);
    const conflictingBinding = activeBindings.find((binding) => binding.key && binding.key === event.key && binding.id !== pendingRebindId);
    const previousKey = currentBinding.key;
    const previousLabel = currentBinding.label;

    currentBinding.key = event.key;
    currentBinding.label = normalizeKeyLabel(event.key);

    if (conflictingBinding) {
        conflictingBinding.key = previousKey;
        conflictingBinding.label = previousLabel;
    }

    pendingRebindId = null;
    saveControlsSettings();
    renderControlsMenu();
    return true;
}

function setControlsVisible(shouldShowControls){
    const app = document.querySelector(".app");
    const controlsPanel = document.getElementById("controlsPanel");
    const controlsButton = document.getElementById("controlsButton");
    const packGroups = document.querySelector(".packGroups");

    window.clearTimeout(controlsCloseTimer);
    app.classList.toggle("showControls", shouldShowControls);
    packGroups.inert = shouldShowControls;
    packGroups.setAttribute("aria-hidden", shouldShowControls.toString());
    controlsButton.textContent = shouldShowControls ? "Hide Settings" : "Settings";
    controlsButton.setAttribute("aria-pressed", shouldShowControls.toString());

    if (shouldShowControls) {
        controlsPanel.classList.remove("isClosing");
        controlsPanel.setAttribute("aria-hidden", "false");
        window.requestAnimationFrame(() => {
            controlsPanel.classList.add("isOpen");
        });
        return;
    }

    if (!shouldShowControls) {
        controlsPanel.classList.remove("isOpen");
        controlsPanel.classList.add("isClosing");
        pendingRebindId = null;
        renderControlsMenu();
        controlsCloseTimer = window.setTimeout(() => {
            controlsPanel.setAttribute("aria-hidden", "true");
            controlsPanel.classList.remove("isClosing");
        }, 200);
    }
}

function toggleControls(){
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setControlsVisible(!document.querySelector(".app").classList.contains("showControls"));
}

function handleDocumentClick(event){
    handleRandoDocumentClick(event);

    if (!document.querySelector(".app").classList.contains("showControls")) return;

    const controlsPanel = document.getElementById("controlsPanel");
    const controlsButton = document.getElementById("controlsButton");
    const eventPath = event.composedPath();

    if (
        eventPath.includes(controlsPanel) ||
        eventPath.includes(controlsButton) ||
        controlsPanel.contains(event.target) ||
        controlsButton.contains(event.target)
    ) return;

    setControlsVisible(false);
}

function handleKeyboardControls(event){
    const activeBindings = getActiveKeyBindings();

    if (handleRandoDocumentKeydown(event)) {
        event.preventDefault();
        return;
    }

    if (rebindControl(event)) {
        event.preventDefault();
        return;
    }

    if (document.querySelector(".app").classList.contains("showControls")) {
        if (activeBindings.some((binding) => binding.key && binding.key === event.key)) event.preventDefault();
        return;
    }
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;

    if (trackerMode === "rando") {
        const enemyGroupBinding = activeBindings.find((binding) => binding.key && binding.key === event.key && binding.enemyGroupIndex !== undefined);
        if (enemyGroupBinding) {
            event.preventDefault();
            revealSelectedPrizePack();
            if (activeRandoEnemyRow !== null) {
                selectedRandoMenuOptionIndex = enemyGroupBinding.enemyGroupIndex + 1;
                closeRandoEnemyMenu();
                return;
            }

            assignRandoEnemyGroupToRow(selectedPrizePackIndex, enemyGroupBinding.enemyGroupIndex);
            return;
        }

        if (event.key === activeBindings.find((binding) => binding.id === "randoSelectPrevious")?.key) {
            event.preventDefault();
            if (activeRandoEnemyRow !== null) {
                selectPreviousRandoMenuGroup();
                return;
            }

            selectPrizePack(selectedPrizePackIndex - 1, true);
            return;
        }

        if (event.key === activeBindings.find((binding) => binding.id === "randoSelectNext")?.key) {
            event.preventDefault();
            if (activeRandoEnemyRow !== null) {
                selectNextRandoMenuGroup();
                return;
            }

            selectPrizePack(selectedPrizePackIndex + 1, true);
            return;
        }

        if (event.key === activeBindings.find((binding) => binding.id === "randoOpenEnemyMenu")?.key) {
            event.preventDefault();
            revealSelectedPrizePack();
            toggleRandoEnemyMenu(selectedPrizePackIndex);
            return;
        }

        if (event.key === activeBindings.find((binding) => binding.id === "randoCloseEnemyMenu")?.key) {
            event.preventDefault();
            closeRandoEnemyMenu();
            return;
        }

        if (event.key === activeBindings.find((binding) => binding.id === "randoResetTracker")?.key) {
            event.preventDefault();
            resetRandoEnemyAssignments();
            return;
        }

        if (event.key === activeBindings.find((binding) => binding.id === "randoClearSelectedEnemyGroup")?.key) {
            event.preventDefault();
            clearSelectedRandoEnemyGroup();
            return;
        }

        return;
    }

    const packBinding = activeBindings.find((binding) => binding.key && binding.key === event.key && binding.packIndex !== undefined);
    if (packBinding) {
        event.preventDefault();
        selectPrizePack(packBinding.packIndex, true);
        if (packBinding.behavior === "selectAndIncrement") {
            incrementPackTable(getSelectedPrizePack());
        }
        return;
    }

    if (event.key === activeBindings.find((binding) => binding.id === "selectPrevious")?.key) {
        event.preventDefault();
        selectPrizePack(selectedPrizePackIndex - 1, true);
        return;
    }

    if (event.key === activeBindings.find((binding) => binding.id === "selectNext")?.key) {
        event.preventDefault();
        selectPrizePack(selectedPrizePackIndex + 1, true);
        return;
    }

    if (event.key === activeBindings.find((binding) => binding.id === "incrementCounter")?.key) {
        event.preventDefault();
        revealSelectedPrizePack();
        incrementPackTable(getSelectedPrizePack());
        return;
    }

    if (event.key === activeBindings.find((binding) => binding.id === "decrementCounter")?.key) {
        event.preventDefault();
        revealSelectedPrizePack();
        decrementPackTable(getSelectedPrizePack());
        return;
    }

    if (event.key === activeBindings.find((binding) => binding.id === "resetTracker")?.key) {
        event.preventDefault();
        resetTracker();
        return;
    }

    if (event.key === activeBindings.find((binding) => binding.id === "toggleEnemies")?.key) {
        event.preventDefault();
        toggleEnemyPanels();
    }
}

function syncMobileEnemyState(){
    const mobilePortrait = window.matchMedia("(pointer: coarse) and (orientation: portrait)").matches;
    const mobileLandscape = window.matchMedia("(pointer: coarse) and (orientation: landscape)").matches;
    const mobileControlsHidden = window.matchMedia("(pointer: coarse)").matches;
    const toggleButton = document.getElementById("toggleEnemiesButton");

    if (mobileControlsHidden && document.querySelector(".app").classList.contains("showControls")) {
        setControlsVisible(false);
    }

    if (trackerMode === "rando") {
        toggleButton.disabled = false;
        setEnemyPanelsVisible(true);
        return;
    }

    if (mobilePortrait) {
        setEnemyPanelsVisible(false);
        toggleButton.disabled = true;
        toggleButton.innerHTML = "Enemies Hidden<br>in Portrait Mode";
        toggleButton.setAttribute("aria-pressed", "false");
        return;
    }

    if (mobileLandscape) {
        setEnemyPanelsVisible(true);
        toggleButton.disabled = true;
        toggleButton.innerHTML = "Enemies Shown<br>in Landscape Mode";
        toggleButton.setAttribute("aria-pressed", "true");
        return;
    }

    toggleButton.disabled = false;
    setEnemyPanelsVisible(document.querySelector(".app").classList.contains("showEnemies"));
}

function handleViewportChange(){
    syncMobileEnemyState();
    scheduleEnemySpriteSizeUpdate();
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".trackerStage").appendChild(createRandoEnemyMenu());

    prizePacks.forEach((pack) => {
        createPackTable(pack);

        const packGroup = document.querySelector(`[data-pack-id="${pack.id}"]`);
        const incrementButton = packGroup.querySelector('[data-action="increment"]');
        bindIncrementButton(incrementButton, pack);
        packGroup.addEventListener("mousedown", preventMouseFocus);
        packGroup.addEventListener("click", () => selectPrizePack(prizePacks.indexOf(pack)));
        const enemyPanel = createEnemyPanel(pack);
        packGroup.appendChild(enemyPanel);
        observeEnemyPanel(enemyPanel);
    });

    loadControlsSettings();
    renderControlsMenu();
    bindModeSwitch();
    const footerButtons = [
        document.getElementById("resetButton"),
        document.getElementById("toggleEnemiesButton"),
        document.getElementById("controlsButton"),
    ];

    footerButtons.forEach((button) => button.addEventListener("mousedown", preventMouseFocus));
    footerButtons[0].addEventListener("click", resetTracker);
    footerButtons[1].addEventListener("click", toggleEnemyPanels);
    footerButtons[2].addEventListener("click", toggleControls);
    document.addEventListener("mousedown", handleDocumentMouseDown);
    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("keydown", handleKeyboardControls);
    setTrackerMode(trackerMode);
    syncMobileEnemyState();
    scheduleEnemySpriteSizeUpdate();
    window.addEventListener("resize", handleViewportChange);
    window.addEventListener("orientationchange", handleViewportChange);
});
