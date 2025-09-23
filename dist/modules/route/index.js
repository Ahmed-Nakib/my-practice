import { Router } from "express";
import { todoRouter } from "../todo/todo.route.js";
export const router = Router();
router.use("/todo", todoRouter);
//# sourceMappingURL=index.js.map