import express from "express";
import bodyParser from "body-parser";
import Logger from "./utils/Logger";
import RouteHandler from "./routes";
const PORT = 8002;

// App
const app = express();

// App settings;
app.set("json spaces", 1);
app.use(bodyParser.urlencoded({ extended: true }));

// App listen & route handler;
RouteHandler(app);
app.listen(PORT, () => {
    Logger.info(`App listening on port: ${PORT} | http://localhost:${PORT}`, {label: "INFO"})
})