function randomFun () {
  fetch('https://xkcd.now.sh/?comic=latest')
    .then(response => response.json())
    .then(data => {
      console.log(data)

      const renderImage = document.createElement('img')
      document.body.prepend(renderImage)
      renderImage.src = data.img
      renderImage.alt = data.alt
    })

    .catch(error => console.log(error))
}
randomFun()
