const sectionEls = document.querySelectorAll('.section');
const btnItems = document.querySelectorAll('.control');

function changeSections() {
    console.log('first')
    for (let i = 0; i < btnItems.length; i += 1){
        btnItems[i].addEventListener('click', onBtnSectionClick);
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
    let previousSection = document.querySelector('.active');
    previousSection.classList.remove('active');
    sectionEls.forEach(section => {
        if (section.id === id) {
            section.classList.add('active');
        };
    });
};

changeSections();