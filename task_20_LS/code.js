let find_button = document.querySelector('.find_button')
let answer = document.querySelector('.answer')
let error = document.querySelector('.error')
let isLoading = true

const load = async (isLoading) => {
    if (isLoading) {
        answer.innerHTML = 'in process...'
        error.innerHTML = ''
    }
    else
        error.innerHTML = 'end'

}
find_button.addEventListener('click', () => {
    isLoading = true
    load(isLoading);

    let what = document.querySelector('.what').value
    let number = +document.querySelector('.number').value
    let url = `https://swapi.dev/api/${what}/`
    console.log(url)
    fetch(url)
        .then(function (res) {
            if (res.status != 200) {
                return Promise.reject(res.statusText)
            }
            return Promise.resolve(res)
        })
        .then(res => res.json())
        .then(data => {
            let obj = data.results[number - 1]
            if (obj == undefined) return Promise.reject('404')
            console.log(what, obj)
            answer.innerHTML = getInfo(what, obj)
            error.innerHTML = ''
        })
        .catch(function (err) {
            error.innerHTML = `<p>Ошибка: ${err}</p>`
            answer.innerHTML = ''
        })
        .finally(function () {
            isLoading = false;
            console.log('finally')
        })
});


const getInfo = (type, obj) => {
    let text = ''
    if (type == 'planets')
        text = `
            <p class='title'>name: ${obj.name}</p>
            <p>population: ${obj.population}</p>
    `
    if (type == 'people')
        text = `
            <p class='title'>name: ${obj.name}</p>
            <p>height: ${obj.height}</p>
            <p>mass: ${obj.mass}</p>
        `
    if (type == 'films')
        text =
            `<p class='title'>name: ${obj.title}</p>
            <p>director: ${obj.director}</p>
            <p>producer: ${obj.producer}</p>
    `

    if (type == 'species')
        text =
            `<p class='title'>name: ${obj.name}</p>
            <p>designation: ${obj.designation}</p>
`

    if (type == 'starships')
        text =
            `<p class='title'>name: ${obj.name}</p>
            <p>model: ${obj.model}</p>
            <p>consumables: ${obj.consumables}</p>
`
    if (type == 'vehicles')
        text =
            `<p class='title'>name: ${obj.name}</p>
            <p>model: ${obj.model}</p>
            <p>manufacturer: ${obj.manufacturer}</p>
`
    return text;
}