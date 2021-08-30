const text = document.querySelector(".text p");

text.innerHTML = text.innerHTML.split('').map((letter, i) => {
    return `<span style="transform: rotate(${i * 8.3}deg)">${letter}</span>`;
}).join('');