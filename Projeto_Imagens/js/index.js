import { momentos } from "./bd.js"

document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const index = parseInt(button.value);
        const momento = momentos[index];

        document.querySelector('h2').textContent = momento.titulo;
        document.querySelector('#mainImage').src = momento.img;
        document.querySelector('#descricao').textContent = momento.descricao;
    });
});
