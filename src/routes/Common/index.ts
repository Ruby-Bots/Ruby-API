import Route from "../../structures/Route";


export default new Route({
    name: `/`,
    execute: async (req, res) => {
        res.send({
            "Support": "https://rubybots.co/community",
            "Notice": "[item] = optional | <item> = required",
        })
    }
})