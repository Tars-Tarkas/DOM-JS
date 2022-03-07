// Ждать до тех пор, пока документ не будет готов
document.addEventListener('DOMContentLoaded', addEventClickToTerms);

//Отслеживание клика

function addEventClickToTerms() {
    let dt = document.getElementsByTagName('dt');
    for (let i = 0; i < dt.length; i++) {
        dt[i].addEventListener('click', checkIfOpen)
    }
}

// проверка на присутсвие уже стиля, если нет то добавляем его

// JavaScript свойство nextSibling объекта Node возвращает 
//дочерний узел следующий за указанным узлом внутри родительского элемента, 
//или null, если указанный узел является последним дочерним узлом 
//в родительском элементе.
function checkIfOpen(e) {
    if (e.target.nextSibling.nextSibling.style.display ==
        '' || e.target.nextSibling.nextSibling.style.display == 'none') {
        e.target.nextSibling.nextSibling.style.display = 'block';
    } else {
        e.target.nextSibling.nextSibling.style.display = 'none';
    }
}