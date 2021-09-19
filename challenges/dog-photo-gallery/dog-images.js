const generator = document.getElementById('generator')

const ul = document.querySelector('.images')
function randomBreed() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response=>response.json()).then(data =>{
            const li = document.createElement('li')
            const image = document.createElement("img");
            image.src = (data.message)
            image.alt = 'adorable dogs'
            li.appendChild(image)
            ul.appendChild(li)
       
        })
}

generator.addEventListener('click', randomBreed);