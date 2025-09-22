import AddForm from "@/component/modules/AddForm"
import TodoItem from "@/component/modules/TodoItem"
import TodoLIst from "@/component/modules/TodoLIst"
import { useAppSelector } from "@/hook/reduxHook"

const MainLayout = () => {

  const todos = useAppSelector(store => store.todo)
  return (
    <div className="grid grid-cols-3 w-screen h-screen bg-blue-200">
      <div className="col-span-1">
        <AddForm/>
      </div>
      <div className="col-span-2"> 
       <TodoLIst>
        {todos.map(todo => <TodoItem todo={todo} key={todo.id}/>)}
       </TodoLIst>
      </div>
    </div>
  )
}

export default MainLayout
