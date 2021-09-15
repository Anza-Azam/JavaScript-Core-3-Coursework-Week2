const generator = document.getElementById('generator')
const image = document.createElement('img')
const li = document.getElementById('images')





function randomBreed() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(function (response) {
        
            return response.json();
        
        }).then(function (random_image) {
            image.src = (random_image.message)
            image.alt = 'adorable dogs'
            li.appendChild(image)
    
    
        }).catch(error=> console.log('Connection Error'))


}

generator.addEventListener('click', randomBreed);