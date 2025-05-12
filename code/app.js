const funFacts = [
    "Fun Fact: GPT-3 has 175 billion parameters!",
    "Fun Fact: Claude is named after Claude Shannon, father of information theory!",
    "Fun Fact: Gemini by Google was trained with reinforcement learning from human feedback!",
    "Fun Fact: LLaMA is open-source and ideal for research and transparency!",
    "Fun Fact: GPT-4 can process both images and text!"
];

let lastFactIndex = -1;

function toggleTable() {
    const table = document.getElementById("model-table");
    table.style.display = (table.style.display === "none" || table.style.display === "") ? "table" : "none";
}

function showFunFact() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * funFacts.length);
    } while (newIndex === lastFactIndex);
    lastFactIndex = newIndex;

    alert(funFacts[newIndex]);
}
