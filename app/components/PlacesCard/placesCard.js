export const templatePlaces = (item) => `
    <div class="place" style="background: url(${item.img}) no-repeat center center; background-size: cover">
        <div class="detailPlace">
            <h3>${item.station}</h3>
            <h4>${item.location}</h4>
            <p>${item.tracks} pistas</p>
        </div>
    </div>
    `;