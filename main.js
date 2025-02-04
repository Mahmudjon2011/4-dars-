const form = document.getElementById("form");
const input = document.getElementById("input");
const btnMinus = document.getElementById("minus");
const btnPlyus = document.getElementById("plyus");
const text = document.getElementById("text");

let count = 0; // Raqamni boshlang'ich qiymati

// Formani submit qilganda
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Formani yangilanishini oldini olish

    const inputValue = input.value; // Inputdagi qiymatni olish
    
    if (inputValue) {
        count = parseInt(inputValue); // Inputdagi qiymatni integerga o'zgartirish
        text.textContent = count; // Ekrandagi sonni yangilash
    }
    input.value = ""; // Inputni tozalash
});

// Minus tugmasi bosilganda
btnMinus.addEventListener("click", () => {
    count--; // Sonni kamaytirish
    text.textContent = count; // Ekrandagi sonni yangilash
});

// Plyus tugmasi bosilganda
btnPlyus.addEventListener("click", () => {
    count++; // Sonni oshirish
    text.textContent = count; // Ekrandagi sonni yangilash
});