let box = document.querySelector('.box');
let addPostButton = document.querySelector('.addPost');

const createPost = (post) => {
    return `
    <div class='post'>
        <h3 class='post_title'>${post.title}</h3>
        <p class='post_body'>${post.body}</p>
    </div>
    `;
}

const addPostToBox = (post_text) => {
    box.innerHTML += post_text;
}

const addPost = (titlePost, bodyPost) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: `${titlePost}`,
            body: `${bodyPost}`,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            let text = createPost(json);
            addPostToBox(text);
        });


}

addPostButton.addEventListener('click', () => {
    const titlePost = document.querySelector('.titlePost').value;
    const bodyPost = document.querySelector('.bodyPost').value;
    if (titlePost.length != 0 && bodyPost.length != 0)
        addPost(titlePost, bodyPost);
    else
        alert('Input all data');
})
