import  Pool  from "pg";
import { USER_DATABASE,HOST_DATABASE,DATABASE,PASSWORD,PORT_DATABASE } from "./configuration.js";

export const pool = new Pool.Client({
    user: USER_DATABASE,
    host: HOST_DATABASE,
    database: DATABASE,
    password: PASSWORD,
    port: PORT_DATABASE,
    allowExit0nIdle:true,
});

export const connectedDB = async() =>{
    try {
        await pool.connect();
        console.log('>>> Data Base connected');
    } catch (error) {
        console.log(error)
    }
}
