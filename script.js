// Your code here
let table = document.getElementsByTagName('table')[0];
let colorArr = ['red', 'green', 'purple'];
let colorSel = 0;
function makeRow() {
    let newRow = document.createElement('tr');
    for (let i = 0; i < 20; i++) {
        const cell = document.createElement('td');
        newRow.appendChild(cell);
    }
    table.appendChild(newRow);
}
let addButton = document.getElementById('add-row');
addButton.addEventListener('click', makeRow);
const colorize = function () {
    if (event.target.tagName == 'TD') {
        if (event.target.className.length && event.target.className == color) {
            event.target.className = '';
        } else {
            event.target.className = `${color}`;
        }
    }
};
let select = document.getElementsByTagName('select')[0];
let color = colorArr[colorSel];
select.addEventListener('change', function () {
    color = (event.target.value);
})
table.addEventListener('click', colorize)
let direction = '';
document.addEventListener('keypress', (event) => {
    if (event.key == 'w') {
        if (colorSel >= colorArr.length - 1) {
            colorSel = 0;
        } else {
            colorSel++
        };
    } else if (event.key == 'q') {
        if (colorSel <= 0) {
            colorSel = colorArr.length - 1;
        } else {
            colorSel--
        };
    };
});
