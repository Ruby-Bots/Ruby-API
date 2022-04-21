import { Tenor } from "../../api/Tenor";
import Route from "../../structures/Route";

export default new Route({
  name: "/gif",
  execute: async (req, res) => {
    const { q } = req.query;
    if (!q) {
      return res.status(200).send({ msg: "Please supply a valid search query!", status: "Failed" });
    }
    const response = await Tenor(q as string);
    res.status(200).send({ ...response });
  },
});
