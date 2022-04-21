import Route from "../../structures/Route";
import randomAnwsers from "../../data/json/randomAnwsers";
export default new Route({
    name: `/json/8ball`,
    execute: async (req, res) => {
        const { q } = req.query;
        if(!q) return res.status(200).send({ status: "Failed", msg: "Please supply a text query" })
        const response = randomAnwsers[Math.floor(Math.random() * randomAnwsers.length)];
        res.status(200).send({ question: q, response })
    }
})