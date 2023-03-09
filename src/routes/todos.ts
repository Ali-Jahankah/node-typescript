import { createTodo } from "./../controllers/todos";
import { Router } from "express";
const router = Router();

router.post("/create-todo", createTodo);
router.get("/");
router.delete("");
router.patch("");
export default router;
