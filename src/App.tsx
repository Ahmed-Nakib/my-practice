import { useAppDispatch, useAppSelector } from "@/hook/reduxHook";
import { decrement, increment } from "@/redux/modules/counter/counter.slice"

const App = () => {

  const dispatch = useAppDispatch ();
  const {count} = useAppSelector((store) => store.counter);
  const handleIncrement = () => {
    dispatch(increment(5));
  }

  const handleDecrement = () => {
    dispatch(decrement(2));
  }

  return (
    <div className="h-screen w-screen bg-fuchsia-300 flex gap-4 justify-center items-center">
      <button onClick={handleIncrement} className="px-10 py-4 text-2xl bg-blue-50 font-extrabold cursor-pointer">increment</button>
      <span className="text-2xl mx-3.5 bg-amber-50 px-7 py-4">{count}</span>
      <button onClick={handleDecrement} className="px-10 py-4 text-2xl bg-blue-50 font-extrabold cursor-pointer">decrement</button>
    </div>
  )
}

export default App
