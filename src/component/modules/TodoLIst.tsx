import type { ReactNode } from "react"


const TodoLIst = ({children}: {children:ReactNode}) => {
  return (
    <ul>
        {children}
    </ul>
  )
}

export default TodoLIst
