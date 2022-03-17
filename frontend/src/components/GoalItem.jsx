import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'

function GoalItem({ goal }) {
  const dispatch = useDispatch()

  return (
    <div className='dark:bg-white bg-slate-900 rounded-lg gap-2'>
    
    <div className=' w-96 min px-3  rounded-t-md flex justify-end bg-transparent'>
    <button onClick={() => dispatch(deleteGoal(goal._id))} className="text-white dark:text-black"> X </button>
      </div>  
    <div className=" dark:text-black  w-96 min-h-52  px-3  text-white flex flex-col whitespace-normal break-words bg-transparent">
      <h2 className="font-medium leading-tight text-2xl mt-0 mb-2">
        {goal.text}
      </h2>
    </div>
    <div className='bg-transparent dark:text-black text-white rounded-b-md text-right text-xs align-text-bottom mb-0'>{new Date(goal.createdAt).toLocaleString("en-US")}
    </div>
    </div>

  );
}

export default GoalItem