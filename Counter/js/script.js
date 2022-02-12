let dropDownInput = document.querySelector(".dropdown__input");
let menuInput = document.querySelector(".counter__inner");

const inputDown = function() {
    menuInput.classList.toggle('open');
};

const setLestener = (element, type, handler) => {
    if (!element) {
        return;
    }
    element.addEventListener(type, handler);
    return () => {
        element.removeEventListener(type, handler);
    };
};

setLestener(dropDownInput, 'click', function(e) {
    e.stopPropagation();
    inputDown();
});

document.addEventListener('click', function(ev) {
    const target = ev.target;
    const its_dlqList = target == menuInput || menuInput.contains(target);
    const its_dlqInput = target == dropDownInput;
    const menu_is_block = menuInput.classList.contains('open');
    if (!its_dlqList && !its_dlqInput && menu_is_block) {
        inputDown();
    }
});

document.addEventListener('click', e => console.log(e.target))