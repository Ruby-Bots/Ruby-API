import Request from "../../api/Request";
import Route from "../../structures/Route";

export default new Route({
    name: "/json/npm",
    execute: async (req, res) => {
        const { q } = req.query;
        if (!q)
          return res
            .status(200)
            .send({
              status: "Failed",
              msg: "Please supply a valid search query",
            });
        const response = await Request(
          `https://registry.npmjs.com/-/v1/search?text=${q}`
        );
        res.status(200).send(response.objects ? response.objects[0] : response)
    }
})