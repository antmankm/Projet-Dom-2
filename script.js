document.addEventListener("DOMContentLoaded", function() {
    const changecolorbtn = document.querySelector('#change-color-btn');
    const colorbox = document.querySelector('#color-box');

    function getRandomColor() {
        const lettres = '0123456789ABCDEF';
        let color = "#";

        for (let i = 0; i < 6; i++) {  
            color += lettres[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    changecolorbtn.addEventListener('click', function() {
        colorbox.style.backgroundColor = getRandomColor();
    });
});
