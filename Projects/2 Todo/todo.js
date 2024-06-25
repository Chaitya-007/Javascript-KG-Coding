let todoList = [];
//whenver page will be reloaded all lists will be displayed
displayItems();

function addTodo()
{
    let inputElement = document.querySelector('#todo-input');

    let todoItem = inputElement.value;

    todoList.push(todoItem);
    inputElement.value = '';
    displayItems();
}

function displayItems()
{
    let conatinerElement = document.querySelector('.todo-container');

    let newhtml = ``;
    for(let i = 0; i < todoList.length; i++)
    {
        newhtml += `
        <div>
        <span>${todoList[i]}</span>
        <button onclick="todoList.splice(${i},${1});
        displayItems()">Delete</button>
        </div>
        `;
    }

    conatinerElement.innerHTML = newhtml;
}