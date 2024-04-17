fetch("http://localhost:3000/artwork")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    renderArtArr(data);
  });

// document.addEventListener("DOMContentLoaded", function() {
// const element = document.querySelector("your-selector");
//     // Rest of your code
// })

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
                li.style.border = 'solid 3px #90EE90'
            }
    
            function handleUnhover() {
                    li.style.border = 'none'
            }
    
            ul.appendChild(li)
        })

        const image = document.getElementById('.artwork-image');
        // grab p, where painting title stored

        image.addEventListener('click', function() {
          const artist = data.artist; 
          const year = data.year;
          const style = data.style; 
        
          console.log(`Artist: ${artist}, Year: ${year}, Style: ${style}`);
        });
     
}
    
