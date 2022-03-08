// Color
const cardBorder = document.querySelector('.card-border')
const profileImage = document.querySelector('.profile-image')
const btnRandom = document.querySelector('.btn-random')

randomColor()

function randomColor() {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    color = Math.floor(Math.random() * 360)
    cardBorder.style.backgroundColor = `hsl(${color}, 40%, 20%)`
}

btnRandom.addEventListener('click', randomColor)

// GitHub API
const btnSearch = document.querySelector('.search-icon')
const input = document.querySelector('.input-user')
console.log(input)
let user = 'braiancalot'
getGitHubProfileInfos()

input.addEventListener('keyup', event => {
    if (event.keyCode === 13) {
        event.preventDefault()
        btnSearch.click()
    }
})
btnSearch.addEventListener('click', searchGitHubProfile)

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${user}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            login.textContent = data.login
            followers.textContent = data.followers + ' Seguidores'
            following.textContent = data.following + ' Seguindo'
            repositories.textContent = data.public_repos + ' Repositórios'
            company.textContent = data.company
            local.textContent = data.location
            profileImage.src = data.avatar_url
        })
}

function searchGitHubProfile() {
    user = input.value
    input.value = ''
    getGitHubProfileInfos()
}
