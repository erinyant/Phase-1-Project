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
            li.appendChild(p)
    
            const img = document.createElement('img')
            img.src = artObj.image
            img.style.margin = '5px'
            img.style.border = '15px groove gold'

            li.appendChild(img)
    
            li.addEventListener('mouseover', handleHover)
            li.addEventListener('mouseout', handleUnhover)
    
            function handleHover() {
                li.style.border = 'solid 4px #90EE90'
            }
    
            function handleUnhover() {
                    li.style.border = 'none'
            }
    
            ul.appendChild(li)
        })

        const image = document.querySelector('.artwork-image');

        image.addEventListener('click', function() {
          const artist = data.artist; // Assuming `data` represents the object you provided
          const year = data.year; // Assuming `data` represents the object you provided
          const style = data.style; // Assuming `data` represents the object you provided
        
          console.log(`Artist: ${artist}, Year: ${year}, Style: ${style}`);
        });
     
}
    
