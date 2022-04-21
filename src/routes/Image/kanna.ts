import { Tenor } from "../../api/Tenor";
import Route from "../../structures/Route";

export default new Route({
    name: "/gif/kanna",
    execute: async (req, res) => {
        const response = await Tenor("Kanna Anime");
        res.status(200).send({ ...response });
    }
})