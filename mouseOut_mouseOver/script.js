function mouseOverHandler(e) {
    e.target.style.border = '2px solid red';
    e.stopPropagation();
};

function mouseOutHandler(e) {
    this.style.border = '0px';
    e.stopPropagation();
};

let all = document.getElementsByTagName('li');
for (let i = 0; i < all.length; i++) {

    //пролслушиваем событие появления курсора мыши на элемент
    all[i].addEventListener('mouseover', mouseOverHandler);

    //прослушиваем событие отведения курсора мыши от элемента
    all[i].addEventListener('mouseout', mouseOutHandler);
};