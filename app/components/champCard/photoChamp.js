
export const photoChamp = (item) => `
    <figure class="card">
        <div class="front">
            <img class="imgC" src="${item.photo}" alt="${item.name}"></img>
        </div>
        <div class="back">    
            <h4>${item.name}<h4>
            <h3></h3>${item.age} años</h3>
            <p>Modalidad ${item.speciality}</p>
            <a href="${item.video}"><img src="../../assets/iconoYou.png"</a>
            <p>🏅 ${item.awards}</p>
        </div>
    </figure>
   `;
   //style="background-image: url:${item.photo} no-repeat center center; background-size: cover"