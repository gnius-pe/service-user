import express from "express";
import morgan from "morgan";

import userCategory from "./routes/userCategoryRoute.js";

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use('/api/v1',userCategory);

export default app;