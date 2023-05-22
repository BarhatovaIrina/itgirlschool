comments = []

const name_text = document.querySelector('#name');
const url = document.querySelector('#url');
const comment = document.querySelector('#comment');
const but = document.querySelector('.item-button');
let f = false;

name_text.addEventListener('change', () => {
    let s = name_text.value;
    s = s.trim();
    s = s.toLowerCase();
    let s_mas = s.split(' ');
    if (s_mas.length < 3) {
        name_text.value = '';
        alert('Введите полное ФИО');
        flag = false;
    }
    else {
        let fio = s_mas[0][0].toUpperCase() + s_mas[0].substr(1, s_mas[0].length);
        fio += ' ' + s_mas[1][0].toUpperCase() + s_mas[1].substr(1, s_mas[1].length);
        fio += ' ' + s_mas[2][0].toUpperCase() + s_mas[2].substr(1, s_mas[2].length);
        name_text.value = fio;
        flag = true;
    }

})

const chat_comments = document.querySelector('.chat_comments');
but.addEventListener('click', () => {
    comment.value = checkSpam(comment.value);
    let s = '';
    if (flag) {
        let item = {
            name: name_text.value,
            url: url.value,
            comment: comment.value
        }
        comments.push(item);
        chat_comments.innerHTML = '';
        comments.forEach(element => {
            chat_comments.innerHTML += `
        <div class='comment_item'>
            <div class = 'comment_title'>
                <img src='${element.url}' alt='ava'>
                <span>${element.name}</span>
            </div>
            <div class='comment_text'>
            <p>${element.comment}</p>
            </div>
        </div>
        `
        });
        // name_text.value = '';
        comment.value = '';
    }
});

function checkSpam(str) {
    let s_new = str;
    while (s_new.includes('viagra')) {
        const index = s_new.indexOf('viagra');
        s_new = s_new.substr(0, index) + '***' + s_new.substr(index + 6, s_new.length);
    }
    return s_new;
}

