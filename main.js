let addBtn = document.getElementById('add-btn');
let userInput = document.getElementById('user-input');
let item = document.getElementById('items');


addBtn.addEventListener('click', addItem);
item.addEventListener('click', removeItem);

function addItem(e) {
    if(userInput.value != '') {
         //take input from user
         let input = document.getElementById('user-input');

         //create li
         let li = document.createElement('li');
         li.id = 'list-items';
         li.className = 'added-item';
     
         //add input in li
         let liValue = li.appendChild(document.createTextNode(input.value));
     
         //create p
         let p = document.createElement('p');
         p.id = 'value';
         p.className = 'input-value';
         p.appendChild(liValue);
     
         //create complete button
         let completeBtn = document.createElement('button');
         completeBtn.id = 'checked';
         completeBtn.className = 'complete';
         completeBtn.appendChild(document.createTextNode('✔'));
     
         //create delete button
         let delBtn = document.createElement('button');
         delBtn.id = 'del-btn';
         delBtn.className = 'delete';
         delBtn.appendChild(document.createTextNode('❌'));
     
         //create div to store button
         let div = document.createElement('div');
         div.className = 'buttons';
         div.append(completeBtn, delBtn);
     
         //add complete button, input value and delete button in li
         li.append(p, div);
     
         //add li into item(ul)
         item.appendChild(li);
     
         //reset value of input box
         input.value = '';
    }
}


function removeItem(e) {
    if(e.target.classList[0] == 'delete') {
        e.target.parentElement.parentElement.remove();
    }
    if(e.target.classList[0] == 'complete') {
        e.target.parentElement.children[1].remove();

        let changeBg = e.target.parentElement.children[0];
        changeBg.style.backgroundColor = 'green';
    }
}