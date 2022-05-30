const container = document.querySelector('.main-content');
const section = document.querySelectorAll('.section');
const btnList = document.querySelector('.controls');
const btnItems = document.querySelectorAll('.control');

function changeSections() {
    console.log('first')
    for (let i = 0; i < btnItems.length; i += 1){
        btnItems[i].addEventListener('click', onBtnSectionClick)
    };
};

function onBtnSectionClick(e) {
    let currentBtn = document.querySelector('.active-btn');
    let clickedBtn = e.currentTarget;
    if (currentBtn == clickedBtn) {
        return;
    };
    currentBtn.classList.remove('active-btn');
    clickedBtn.classList.add('active-btn');
    let id = clickedBtn.dataset.id;
    
};

changeSections();