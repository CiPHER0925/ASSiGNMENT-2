let addBtn = document.getElementById('add-btn');
let item = document.getElementById('items');


addBtn.addEventListener('click', addItem);


function addItem(e) {
    //take input from user
    let input = document.getElementById('user-input');

    //create li
    let li = document.createElement('li');
    li.id = 'list-items';
    li.className = 'added-item';
    
}