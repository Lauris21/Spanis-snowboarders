import "./styles.css"
import { cleanPg } from "../../utils/cleanPg"

export const Home = () => {
    const app = document.querySelector("#app");
    cleanPg(app);
    app.innerHTML = `
    <div class="home">
        <img src="https://freesoulsierranevada.es/wp-content/uploads/2020/02/primeros-aereos-snowboard.jpg" >
        <h1>Spanish Snow Stars</h1>
    </div>
    `
}