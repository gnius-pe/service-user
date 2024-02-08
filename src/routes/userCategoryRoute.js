import { Router } from "express";
import { createTypeUser, userCategory } from "../controller/userCategoryController.js";

const router = Router();


/**
 * @swagger
 * /api/v1/category:
 *  post:
 *      summary: Guardar un tipo de categoria de usuario
 *      tags:
 *       - UserCategory
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type_sexo:
 *                 type: string
 *                 description: Tipo de sexo del usuario.
 *                 example: M
 *               age:
 *                 type: integer
 *                 description: Edad del usuario.
 *                 example: 23
 *      responses:
 *          200:
 *              description: Usuario creado exitosamente.
 */
router.post('/category', createTypeUser);


router.get('/category',userCategory);

export default router;