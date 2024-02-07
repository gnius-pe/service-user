import app from "./src/app.js";
import { connectedDB } from "./src/config/db.js";

connectedDB();

app.listen(4000);
console.log('SERVER ON PORT [',4000,']');