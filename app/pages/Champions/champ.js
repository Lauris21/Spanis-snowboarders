import "./styles.css";
import { getData } from "../../services/service";
import { photoChamp } from "../../components/champCard/photoChamp";
import { cleanPg } from "../../utils/cleanPg";

const getChampions = async () => {
    const champions = await getData("championsSnow");
    printChampions(champions);
};

const printChampions = (list) => {
    const container = document.createElement("div");
    container.classList.add("containerChampion")
    for (const item of list) {
        container.innerHTML += photoChamp(item);
    }
    const app = document.querySelector("#app");
    cleanPg(app);
    app.appendChild(container);
}

export const Champions = () =>{
    getChampions();
}
