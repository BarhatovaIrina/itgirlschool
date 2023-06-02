let list_tasks = [];
let tasks = document.querySelector('.tasks');
let task_button = document.querySelector('.add_task_button');
let task_text = document.querySelector('.add_task_text');
let task_clear = document.querySelector('.clear_list_tasks');

task_button.addEventListener('click', () => {
    if (task_text.value.length > 0) {
        task = {
            text: task_text.value,
            isdone: false
        }
        list_tasks.push(task);
        task_template(tasks, list_tasks);
    }
    else {
        alert('Введите текст задачи');
    }
    if (list_tasks.length > 0) {
        task_clear.disabled = false;
        task_clear.style.background = 'lightsalmon';
    }
    else task_clear.style.background = 'rgb(212, 212, 212)';
})

function task_template(block, list) {
    block.innerHTML = '';
    let t = '';
    list.forEach((element, index) => {
        if (element.isdone) {
            t += `
            <div class='task'>
            <span class='task_text isdone'>${element.text}</span>
            <input type='checkbox' value='${index}' class='task_check' onclick='change(${index})' checked='checked'></input> 
            </div>`
        }
        else {
            t += `
            <div class='task'>
            <span class='task_text'>${element.text}</span>
            <input type='checkbox' value='${index}' class='task_check' onclick='change(${index})'></input> 
            </div>`
        }
    });
    block.innerHTML = t;
}

task_clear.addEventListener('click', () => {
    list_tasks.splice(0, list_tasks.length);
    task_template(tasks, list_tasks);
    task_clear.style.background = 'rgb(212, 212, 212)';
    task_clear.disabled = true;
    tasks.innerHTML = 'Нет задач';
})

function change(index) {
    list_tasks[index].isdone = !list_tasks[index].isdone;
    task_template(tasks, list_tasks);
}

