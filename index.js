import app from "./src/app.js";
import { connectedDB } from "./src/config/db.js";
import { PORT } from "./src/config/configuration.js";

connectedDB();

app.listen(PORT);
console.log('SERVER ON PORT [',PORT,']');