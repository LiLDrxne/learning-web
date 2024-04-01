document.addEventListener("DOMContentLoaded", function (event) {
    const openButton = document.getElementById('menu-button');


    openButton.addEventListener('click', () => {
        openButton.style.display = 'none';

        setTimeout(() => {
            document.querySelector('#elementor-popup-modal-1204 > div > a').addEventListener('click', () => {
                setTimeout(()=>{
                openButton.style.display = 'flex';
                },1300)
            })
        }, 300)
    })

});