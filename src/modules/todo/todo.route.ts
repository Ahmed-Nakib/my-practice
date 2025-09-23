import { Router } from "express";

export const todoRouter = Router();

todoRouter.get("/all-todos", (req, res) => {
  res.json([
    {
      id: 1,
      todo: "this is dummy todo",
    },
  ]);
});

todoRouter.post("/create-todo", (req, res) => {
  let data = req.body;
  console.log(data);
  
  res.json(data);
});

todoRouter.post("/delete-todo/:id", (req, res) => {
  const todoId = req.params;
  console.log(todoId);
  
  res.json({
    message: "todo item delete successfully"
  })
})

todoRouter.get("/test", (req, res) => {

  let params = req.query;
  console.log(params);
  
  res.json({
    message: "successfully"
  })
})