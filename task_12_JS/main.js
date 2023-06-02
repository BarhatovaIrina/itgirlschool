comments = []

const name_text = document.querySelector('#name');
const url = document.querySelector('#url');
const comment = document.querySelector('#comment');
const but = document.querySelector('.item-button');
let flag = false;
let flag_name = true;

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

const checkname = document.querySelectorAll('.check_name');
const item_name = document.querySelector('.item_name');
let v0 = document.getElementById('v0');
let v1 = document.getElementById('v1');

checkname.forEach(item => {
    item.addEventListener('click', () => {
        x = item.getAttribute('for')
        if (x == 'v0') {
            v1.checked = false;
            flag_name = true;
            item_name.classList.remove('no_show');
        }
        else {
            v0.checked = false;
            flag_name = false;
            item_name.classList.add('no_show');
        }
    })
})

const chat_comments = document.querySelector('.chat_comments');
but.addEventListener('click', () => {
    comment.value = checkSpam(comment.value);
    let s = '';
    let url_path = '';
    let username = '';
    // https://webmg.ru/wp-content/uploads/2022/06/i-226-1.jpeg
    if (url.value.length == 0) {
        url_path = getUrl();
    }
    else {
        url_path = url.value
    }
    if (!flag_name) {
        username = 'username';
    }
    else {
        if (!flag) {
            alert('Введите данные');
        }
        else {
            username = name_text.value;
        }
    }
    if (username.length > 0) {
        let item = {
            name: username,
            url: url_path,
            comment: comment.value,
            date: getDateComment()
        }
        comments.push(item);
        chat_comments.innerHTML = '';
        comments.forEach(element => {
            chat_comments.innerHTML += `
        <div class='comment_item'>
            <div class = 'comment_title'>
                <div>
                <img src='${element.url}' alt='ava'>
                    <span>${element.name}</span>
                </div>    
                <span class='comment_date'>${element.date}</span>
            </div>
            <div class='comment_text'>
            <p>${element.comment}</p>
            </div>
        </div>
        `
        });
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

function getUrl() {
    let index = Math.round(Math.random() * 5);
    let url_path = `img/ava${index}.jpg`;
    return url_path;
}

function getDateComment() {
    let d = new Date();
    let s = `${d.toDateString()} at ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    return s;
}
