//  ! While

let i = 1;
while (i <= 10) {
  console.log(`Iterasi ke ${i}`);
  i++;
}

// ! Do While

let x = 1;
do {
  console.log(x);
  x++;
} while (x <= 10);

// ! Breaks

const words = "Aulia";
const searchWords = "l";

for (let i = 1; i < words.length; i++) {
  const word = words[i];
  if (word.toLowerCase() === searchWords) {
    console.log(`Huruf ${searchWords} di indeks ke ${i}`);
    break;
  }
}

const kataKata = "Aulia";
const skip = "l";

for (let i = 0; i < kataKata.length; i++) {
  const element = kataKata[i];
  if (element === "i") {
    break;
  }
  console.log(`Huruf ke ${i} adalah ${element}`);
}

// ! Backword Looping words

const aulia = "Aulia Jasmine Kumala Inanda";
console.log(aulia.length);

for (let i = aulia.length; i >= 0; i--) {
  const ubahNama = aulia.toUpperCase();
  console.log(ubahNama[i]);
}

// ! Nested Loop

for (let i = 0; i < 3; i++) {
  const kata = "===Aulia Jasmine Kumala Inanda===";
  console.log(`${kata} (Indeks ke ${i + 1})`);
  const ucapan = "CANTIK";
  for (let j = 0; j < ucapan.length; j++) {
    console.log(`indeks ke ${j + 1} - ${ucapan[j]}`);
  }
}
