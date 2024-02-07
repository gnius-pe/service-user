import { pool } from "../config/db.js";

const findAll = async () =>{
    const result = await pool.query('select * from user_category');
    return result.rows;
};

const createUserDate = async (userType) =>{
    const response = await pool.query('insert into user_category (type_sexo,age) values ($1,$2)',[userType.type_sexo,userType.age]);
    return response;
}

export const userCategoryModel = {
    findAll,
    createUserDate,
};