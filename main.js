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

    //create complete button
    let completeBtn = document.createElement('button');
    completeBtn.id = 'checked';
    completeBtn.className = 'complete';
    completeBtn.appendChild(document.createTextNode('✔'));

    //add input in li
    let liValue = li.appendChild(document.createTextNode(input.value));

    //create delete button
    let delBtn = document.createElement('button');
    delBtn.id = 'del-btn';
    delBtn.className = 'delete';
    delBtn.appendChild(document.createTextNode('❌'));

    //add complete button, input value and delete button in li
    li.append(completeBtn, liValue, delBtn);

    //add li into item(ul)
    item.appendChild(li);

    //reset value of input box
    input.value = '';
}