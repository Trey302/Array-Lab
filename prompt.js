let songs = ["Envy Me", "Emtionally Scarred", "24", "Effortless", "20/20"];
console.log(songs[0])
console.log(songs[2])

songs.splice(4, 1, "Happy");
console.log(songs);

let jamFour = songs[3];
songs.push("3 Headed Goat");
songs.pop();

console.log(songs.length);

for (let i = 0; i < songs.length; i++) {
    console.log(`${i}, ${songs[i]}`)
};

let lastSong = songs[songs.length - 1];
console.log(lastSong);