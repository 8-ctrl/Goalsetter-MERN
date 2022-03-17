import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { HiPlusCircle } from "react-icons/hi";
import { createGoal } from '../features/goals/goalSlice'

function GoalForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createGoal({ text }))
    setText('')
  }

  return (
    <section className="w-96">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <textarea
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="dark:border-gray-600 border-2 border-slate-900 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
        </div>
        {/* <div tabIndex="0" className="collapse collaps border border-base-300 bg-base-100 rounded-box dark:bg-slate-700"> 
          <div  className="collapse-title text-xl font-medium">
            Add a goal
          </div>
          <input type='text' placeholder='add text' className="collapse-content text-black border-0"> 
           
          </input>
        </div> */}

        <div className="form-group pt-6">
          <button
            className="flex items-center justify-center h-12 w-full px-1 hover:cursor-pointer text-sm text-center text-gray-600 transition-colors duration-200 transform border border-gray-800 rounded-lg lg:h-10 dark:text-gray-300 dark:border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            type="submit"
          >
            <HiPlusCircle/> Add Goal
          </button>
        </div>
      </form>
    </section>
  );
}

export default GoalForm