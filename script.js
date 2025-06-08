
let score = 0;

const pickaxe = document.getElementById("pickaxe");
const items = document.querySelectorAll(".item");

pickaxe.addEventListener("click", () => {
    pickaxe.classList.add("swing");

    const randomItem = items[Math.floor(Math.random() * items.length)];

    if (!randomItem.classList.contains("dug")) {
        randomItem.classList.add("dug");
        score++;
        alert("🎯 Добыто! Твой счёт: " + score);
    } else {
        alert("⛏ Уже выкопано! Счёт: " + score);
    }

    setTimeout(() => {
        pickaxe.classList.remove("swing");
    }, 300);
});
