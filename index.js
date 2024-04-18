fetch("http://localhost:3000/artwork")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    renderArtArr(data);
  });

function renderArtArr(artArr) {
    
    const ul = document.querySelector('#artwork')
        
    artArr.forEach((artObj) => 
        {
            console.log(artObj)
            console.log(artObj.image)
    
            const li = document.createElement('li')
    
            const p = document.createElement('p')
            p.textContent = artObj.name

            p.id = artObj.id
            p.addEventListener('click', e => {
            const foundArt = artArr.find(art => art.id === e.target.id)
            const pArtistYear = document.createElement('p')
            const pPaintingName = document.createElement('p')
            pPaintingName.textContent = foundArt.name
            pArtistYear.textContent = `Created in ${foundArt.year} by ${foundArt.artist}`
            li.appendChild(pArtistYear)
            })

            li.appendChild(p)
    
            const img = document.createElement('img')
            img.src = artObj.image
            img.style.margin = '5px'
            img.style.border = '15px groove gold'

            li.appendChild(img)
    
            li.addEventListener('mouseover', handleHover)
            li.addEventListener('mouseout', handleUnhover)
    
            function handleHover() {
                li.style.border = 'solid 3px #37b1cc'
            }
    
            function handleUnhover() {
                    li.style.border = 'none'
            }
    
            ul.appendChild(li)
        })
}
    
