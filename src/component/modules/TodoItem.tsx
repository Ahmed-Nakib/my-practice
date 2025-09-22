import { useAppDispatch } from "@/hook/reduxHook"
import { deleteTask, updateTask } from "@/redux/modules/todo/todo.slice";
import { useState } from "react";

const TodoItem = ({todo}: {todo: {id: number, task: string}}) => {

  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(todo.task)

  const dispatch = useAppDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteTask(id))
  }
  const handleEdit = () => {
    setIsEdit(true)
  }
  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateTask({
      id: todo.id,
      task: text,
    }))
    setIsEdit(false)
  }

  return (
    <div className="bg-white flex justify-between mt-3.5 mr-4 py-3 pl-2.5">
       <div className="flex">
         <span className="mr-2.5">#{todo.id}</span>
         {isEdit
          ? <form onSubmit={handleUpdate} className="border pl-2">
            <input className="focus:outline-none" value={text} onChange={(e) => setText(e.target.value)}/> 
            <button className="bg-black px-1.5 text-white pb-0.5 cursor-pointer" >save</button>
          </form>
          : <span>{todo.task}</span>}
       </div>
        <div>
        <button onClick={handleEdit} className="px-2.5 bg-green-500 cursor-pointer rounded-md">Edit</button>
        <button onClick={() => handleDelete(todo.id)} className="px-2.5 bg-red-800 mx-2.5 rounded-md cursor-pointer">Delete</button>
        </div>
    </div>
  )
}

export default TodoItem
