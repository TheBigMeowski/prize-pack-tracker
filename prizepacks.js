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
    {id:"toggleEnemies", action:"Show Enemies", key:null, label:"None"},
];

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

const eitherIncrementDefaults = ["q", "w", "e", "r", "t", "y", "u"];
const eitherIncrementPackBindings = prizePacks.map((pack, index) => ({
    id:`eitherIncrementPack${index + 1}`,
    action:`Increment Prize Pack ${index + 1} (${formatPackName(pack.label)})`,
    key:eitherIncrementDefaults[index],
    label:eitherIncrementDefaults[index].toUpperCase(),
    packIndex:index,
    behavior:"selectAndIncrement",
}));

[
    ...coreKeyBindings,
    ...utilityKeyBindings,
    ...selectPackBindings,
    ...selectAndIncrementPackBindings,
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
            ...selectPackBindings,
            ...eitherIncrementPackBindings,
        ],
    },
};

let selectionMode = "selectAndIncrement";

function getActiveKeyBindings(){
    return [
        ...coreKeyBindings,
        ...utilityKeyBindings,
        ...selectionModes[selectionMode].bindings,
    ];
}

function getEitherBindingById(bindingId){
    return selectionModes.either.bindings.find((binding) => binding.id === bindingId);
}

function syncSharedPackBinding(binding){
    if (binding.id.startsWith("selectPack")) {
        const eitherBinding = getEitherBindingById(binding.id);
        if (eitherBinding) {
            eitherBinding.key = binding.key;
            eitherBinding.label = binding.label;
        }
        return;
    }

    if (binding.id.startsWith("selectIncrementPack")) {
        const packNumber = binding.id.replace("selectIncrementPack", "");
        const eitherBinding = getEitherBindingById(`eitherIncrementPack${packNumber}`);
        if (eitherBinding && selectionMode !== "either") {
            eitherBinding.key = binding.key;
            eitherBinding.label = binding.label;
        }
    }
}

function setSelectionMode(nextMode){
    selectionMode = nextMode;
    pendingRebindId = null;
    renderControlsMenu();
}

function resetControlsToDefault(){
    [
        ...coreKeyBindings,
        ...utilityKeyBindings,
        ...selectPackBindings,
        ...selectAndIncrementPackBindings,
        ...eitherIncrementPackBindings,
    ].forEach((binding) => {
        const defaults = defaultBindings.get(binding.id);
        binding.key = defaults.key;
        binding.label = defaults.label;
    });

    selectionMode = "selectAndIncrement";
    pendingRebindId = null;
    renderControlsMenu();
}

let selectedPrizePackIndex = 0;
let showSelectedPrizePack = false;
let pendingRebindId = null;
let controlsCloseTimer = null;

prizePacks.forEach((pack) => {
    pack.enemies = enemyPrizePacks[pack.id];
});

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
        cell.addEventListener("click", () => {
            selectPrizePack(prizePacks.indexOf(prizePack));
            updatePackTable(prizePack, i);
        });
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

    if (shouldShowSelection) {
        showSelectedPrizePack = true;
        document.querySelector(`[data-pack-id="${nextPack.id}"]`)?.classList.add("isSelected");
    }
}

function getSelectedPrizePack(){
    return prizePacks[selectedPrizePackIndex];
}

function resetTables(){
    prizePacks.forEach((pack) => updatePackTable(pack, 0));
}

function setEnemyPanelsVisible(shouldShowEnemies){
    const app = document.querySelector(".app");
    app.classList.toggle("showEnemies", shouldShowEnemies);

    const toggleButton = document.getElementById("toggleEnemiesButton");
    toggleButton.textContent = shouldShowEnemies ? "Hide Enemies" : "Show Enemies";
    toggleButton.setAttribute("aria-pressed", shouldShowEnemies.toString());

    if (app.classList.contains("showControls")) {
        renderControlsMenu();
    }
}

function toggleEnemyPanels(){
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
    if (binding.id === "toggleEnemies") {
        return document.querySelector(".app").classList.contains("showEnemies") ? "Hide Enemies" : "Show Enemies";
    }

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
    button.textContent = "Reset Controls to Default";
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
        createTooltipLine("Either", `pressing ${getTooltipKey("selectPack1")} selects the Hearts pack, while pressing ${getTooltipKey("eitherIncrementPack1")} selects and increments the Hearts pack`),
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

    return labels[key] || (key.length === 1 ? key.toUpperCase() : key);
}

function rebindControl(event){
    if (!pendingRebindId) return false;

    if (event.key === "Escape") {
        const currentBinding = getActiveKeyBindings().find((binding) => binding.id === pendingRebindId);
        currentBinding.key = null;
        currentBinding.label = "None";
        syncSharedPackBinding(currentBinding);
        pendingRebindId = null;
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
        syncSharedPackBinding(conflictingBinding);
    }

    syncSharedPackBinding(currentBinding);
    pendingRebindId = null;
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
    controlsButton.textContent = shouldShowControls ? "Hide Controls" : "Show Controls";
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

function handleKeyboardControls(event){
    const activeBindings = getActiveKeyBindings();

    if (rebindControl(event)) {
        event.preventDefault();
        return;
    }

    if (document.querySelector(".app").classList.contains("showControls")) {
        if (activeBindings.some((binding) => binding.key && binding.key === event.key)) event.preventDefault();
        return;
    }
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;

    const packBinding = activeBindings.find((binding) => binding.key && binding.key === event.key && binding.packIndex !== undefined);
    if (packBinding) {
        event.preventDefault();
        selectPrizePack(packBinding.packIndex, true);
        if (packBinding.behavior === "selectAndIncrement") {
            incrementPackTable(getSelectedPrizePack());
        }
        return;
    }

    if (event.key === activeBindings.find((binding) => binding.id === "selectPrevious").key) {
        event.preventDefault();
        selectPrizePack(selectedPrizePackIndex - 1, true);
        return;
    }

    if (event.key === activeBindings.find((binding) => binding.id === "selectNext").key) {
        event.preventDefault();
        selectPrizePack(selectedPrizePackIndex + 1, true);
        return;
    }

    if (event.key === activeBindings.find((binding) => binding.id === "incrementCounter").key) {
        event.preventDefault();
        revealSelectedPrizePack();
        incrementPackTable(getSelectedPrizePack());
        return;
    }

    if (event.key === activeBindings.find((binding) => binding.id === "decrementCounter").key) {
        event.preventDefault();
        revealSelectedPrizePack();
        decrementPackTable(getSelectedPrizePack());
        return;
    }

    if (event.key === activeBindings.find((binding) => binding.id === "resetTracker").key) {
        event.preventDefault();
        resetTables();
        return;
    }

    if (event.key === activeBindings.find((binding) => binding.id === "toggleEnemies").key) {
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

document.addEventListener("DOMContentLoaded", function() {
    prizePacks.forEach((pack) => {
        createPackTable(pack);

        const packGroup = document.querySelector(`[data-pack-id="${pack.id}"]`);
        const incrementButton = packGroup.querySelector('[data-action="increment"]');
        incrementButton.addEventListener("click", () => {
            selectPrizePack(prizePacks.indexOf(pack));
            incrementPackTable(pack);
        });
        packGroup.addEventListener("click", () => selectPrizePack(prizePacks.indexOf(pack)));
        packGroup.appendChild(createEnemyPanel(pack));
    });

    renderControlsMenu();
    document.getElementById("resetButton").addEventListener("click", resetTables);
    document.getElementById("toggleEnemiesButton").addEventListener("click", toggleEnemyPanels);
    document.getElementById("controlsButton").addEventListener("click", toggleControls);
    document.addEventListener("keydown", handleKeyboardControls);
    syncMobileEnemyState();
    window.addEventListener("resize", syncMobileEnemyState);
    window.addEventListener("orientationchange", syncMobileEnemyState);
});
