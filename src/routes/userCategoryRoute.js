import { Router } from "express";
import { createTypeUser, userCategory } from "../controller/userCategoryController.js";

const router = Router();

router.post('/category', createTypeUser);
router.get('/category',userCategory);

export default router;