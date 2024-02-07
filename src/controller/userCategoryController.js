import { userCategoryModel } from "../models/userCategory.model.js";

export const createTypeUser = async (req,res) => {
    try {
        const userType = req.body;

        if (!userType.type_sexo || !userType.age) {
            return res.status(400).json({ message: 'Los campos "type_sexo" y "age" son obligatorios.' });
        }

        if (!Number.isInteger(userType.age)) {
            return res.status(400).json({ message: 'El valor de "age" debe ser un número entero.' });
        }

        const response = await userCategoryModel.createUserDate(userType);

        if (response) {
            return res.status(200).json({ message: 'Usuario creado exitosamente.' });
        } else {
            return res.status(500).json({ message: 'Error al crear el usuario.' });
        }
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        return res.status(500).json({ message: 'Error interno del servidor.' });
    }  
}

export const userCategory = async (req,res) =>{
    try {
        const response = await userCategoryModel.findAll();
        res.send(response);
    } catch (error) {
        console.log(error)
        res.send('error')
    }
}