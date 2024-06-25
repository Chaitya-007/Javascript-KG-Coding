let todoList = [{item : 'milk', dueDate: '2024-06-07'},{item : 'farsan', dueDate: '2024-05-07'}];
//whenver page will be reloaded all lists will be displayed
displayItems();

function addTodo()
{
    let inputElement = document.querySelector('#todo-input');
    let inputDate = document.querySelector('#todo-date');

    let todoItem = inputElement.value;
    let todoDate = inputDate.value;

    todoList.push({item : todoItem, dueDate: todoDate});
    inputElement.value = '';
    inputDate.value = '';
    displayItems();
}

function displayItems()
{
    let conatinerElement = document.querySelector('.todo-container');

    let newhtml = ``;
    for(let i = 0; i < todoList.length; i++)
    {
        let {item, dueDate} = todoList[i];
        newhtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btn-delete" onclick="todoList.splice(${i},${1});
        displayItems()">Delete</button>
        `;
    }

    conatinerElement.innerHTML = newhtml;
}