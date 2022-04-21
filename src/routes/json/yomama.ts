import axios from "axios";
import Route from "../../structures/Route";

export default new Route({
    name: "/json/yomama",
    execute: async (req, res) => {
        const response = await (await axios.get(`https://api.yomomma.info/`)).data;
        if (!response || !response.joke) { 
            return res.status(200).send({ status: "Failed", msg: "No joke found!" });
        };
        return res.status(200).send({ provider: "https://api.yomomma.info/", joke: response.joke });
    }
})