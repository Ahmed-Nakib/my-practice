
import { useAppDispatch } from "@/hook/reduxHook";
import { addTask } from "@/redux/modules/todo/todo.slice";
import { useState } from "react"


const AddForm = () => {
  const [text,setText] = useState("");

  const dispatch = useAppDispatch();


  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTask(text))
    setText("")
    
  }
  return (
 <form onSubmit={submitHandler} >
  <input value={text} onChange={(e) => setText(e.target.value)} type="text" className="bg-white w-[80%] ml-7 mt-3.5 py-2 mx-2.5"/>
  <button className="bg-pink-950 text-amber-100 cursor-pointer w-[80%] ml-7 mt-3.5 py-2 mx-2.5">Add</button>
 </form>
  )
}

export default AddForm
