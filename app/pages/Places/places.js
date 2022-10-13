import "./styles.css"
import { getData } from "../../services/service"
import { templatePlaces} from "../../components/PlacesCard/placesCard"
import { cleanPg } from "../../utils/cleanPg"


const getPlaces = async () => {
    const places = await getData("places");
    printPlaces(places);
};

const printPlaces = (list) => {
    const container = document.createElement("div");
    container.classList.add("boxPlaces")
    for (const item of list) {
        container.innerHTML += templatePlaces(item);
    }
    
    const app = document.querySelector("#app");
    cleanPg(app);
    app.appendChild(container);
}

export const Places = () => {
    getPlaces();
}
