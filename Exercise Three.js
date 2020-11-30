let list = [
    ["Like Mike", "Gemini Man", "Uncut Gems"],
    ["NBA 2K21", "GTA V", "Warzone"],
    ["Envy Me", "3 Headed Goat", "For The Night"]
];

// console.log(list[2][2]);
list.splice(1, 0, "Ark")

for (let i = 0; i < list.length; i++) {
    console.log(`${list[i]}`)
};