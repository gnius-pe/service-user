import express from "express";
import morgan from "morgan";
import { swagggerJSDocs } from "./config/swagger.js";
import userCategory from "./routes/userCategoryRoute.js";
import { PORT } from "./config/configuration.js";

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use('/api/v1',userCategory);
swagggerJSDocs(app,PORT);

export default app;