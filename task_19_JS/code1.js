let box = document.querySelector('.box');

const createPost = (post) => {
    return `
    <div class='post' id='${post.id}'>
        <h3 class='post_title'>${post.title}</h3>
        <p class='post_body'>${post.body}</p>
    </div>
    `;
}

const addPostToBox = (post_text) => {
    box.innerHTML += post_text;
}

const url_json = 'https://jsonplaceholder.typicode.com/posts';

//===== 1 variant =====
// const loadPosts = async (url_json) => {
//     let response = await fetch(url_json)
//     let posts = await response.json();
//     box.innerHTML = '';
//     posts.forEach(element => {
//         let text = createPost(element);
//         addPostToBox(text);
//     })
// }

//===== 2 variant =====
const loadPosts = (url_json) => {
    fetch(url_json)
        .then(res => res.json())
        .then(data => {
            data.forEach((element) => {
                let text = createPost(element);
                addPostToBox(text);
            })
        });

}

loadPosts(url_json);

