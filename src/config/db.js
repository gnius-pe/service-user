import  Pool  from "pg";

export const pool = new Pool.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'usersbd',
    password: 'admin',
    port: '5432',
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
