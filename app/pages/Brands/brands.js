import "./styles.css"
import { getData } from "../../services/service"
import { cleanPg } from "../../utils/cleanPg"

const getBrands = async () => {
    const brands = await getData("brands");
    printBrands(brands);
}

const printBrands = (list) => {
    const optionBrands = document.querySelector("#optionBrands");
        list.forEach((item) => { 
            const option = document.createElement("option")
            option.value = `${item.logo}`;
            option.innerText = `${item.brand}`;
            optionBrands.appendChild(option);
        });

        optionBrands.addEventListener("change", (e) => {
        const logoBrand = document.querySelector("#logoBrand")
        logoBrand.innerHTML = "";
        const newImage = `<img src="${e.target.value}" alt="" >`
        logoBrand.innerHTML = newImage;
        })
};



export const Brands = () => {
    const app = document.querySelector("#app");
    cleanPg(app);
    app.innerHTML = `
    <div class="boxBrand">
        <h4>Principales marcas:</h4>
            <select id="optionBrands">
            <option value="">-</option>
            </select>
        <figure class="logo">
            <h3 id="brandName"></h3>
            <section id="logoBrand">
            <img id="photoOption" src= "https://lh3.googleusercontent.com/KjZiWC9zQXbKGxgybC_6WWO4dFHpRI0_pAIZXhb2hMfw460GjV00DWGxWnccrmwHYbvwgs6MmemqXRUXAqeynJWAJbjvMx7g9enTzlX5ti8GAdKOXR4tvX8mZgOmMFoc1bd7ScUF" alt="marcas de snow" />
            </section>
        </figure>
    </div>
    `;
    getBrands()
}
