const best_director = document.querySelector('.best_director');
const best_movies = document.querySelector('.best_movies');

const info = (array) => {
    let info_block = '';
    let i = 0;
    let movies_block = '';
    array.forEach(element => {
        info_block += `
        <div class="info">
            <p class="info_name">${i + 1}. ${element.name}</p>
            <div class="info_career">
            <span class="info_career_text">${element.career}</span>
            <span class="info_filmographia"><a class ="movies_name" href="${element.films}">фильмография</a></span>
            </div>

        </div>
        `
        movies_block += `
        <a class ="movies_name" href="${element.films}">${element.top_rated_film}, </a>`;
        i++;
    });
    best_director.innerHTML = info_block;
    best_movies.innerHTML = movies_block;
}

info(directors);


