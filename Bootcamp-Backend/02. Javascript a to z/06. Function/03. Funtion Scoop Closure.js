function counter() {
  let count = 0;
  return (count += 1); // * count adalah local Variabel | atau bisa disebut count adalah variabel Function counter
}
console.log(counter());

// ! Contoh counter Global

let number = 10;
function counter2() {
  return number++;
}

console.log(counter2());
console.log(counter2());
console.log(counter2());

console.log(" ");
console.log(" ============ ");

// ! Function Closure
//  * Merupakan Function di dalam Function
// Setiap variabel akan di eksikusi di dalam inner function dan tidak berguna setelah function di panggil.

function outerFunction(outerValue) {
  // Variabel lokal dalam outerFunction
  let innerValue = 3;

  // Inner function yang merupakan closure
  function innerFunction() {
    console.log(outerValue); // Mengakses variabel dari outer function
    console.log(innerValue); // Mengakses variabel lokal dalam outer function
  }

  // Mengembalikan innerFunction sebagai nilai balik
  return innerFunction;
}

// Membuat instance dari closure function
let closure = outerFunction(10);

// Memanggil closure function
closure();
