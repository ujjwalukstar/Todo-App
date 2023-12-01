import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../redux/task/taskSlice';

export default function InputBox() {
    const dispatch = useDispatch();
    const backTask = useSelector((state) => state.todo.tasks);
    
    const [singleTask, setSingleTask] = useState('')
    const [random, setRandom] = useState({})
    const handleChange = (e) =>{
        setSingleTask(e.target.value)
        setRandom({text:singleTask})
    }


    
    const handleAddTask = async (e) =>{
        e.preventDefault();
        dispatch(addTask({id: Date.now(), text: singleTask}))
        setSingleTask('')
        console.log(random)
        try {
            const res = await fetch('http://localhost:6868/api/task',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(random)
        })
            const data = await res.json();
        } catch (err) {
            console.log(err)
        }
        
    }


  return (
    <div className='mt-7'>
        <form className='flex justify-center gap-4'>
            <input value={singleTask} onChange={handleChange} type="text" id="text" className="p-4 bg-slate-100 rounded-lg outline-none text-lg" placeholder='Enter your task here'/>
            <button onClick={handleAddTask} className="bg-green-600 rounded-lg p-2 px-6 text-white hover:opacity-70">Add</button>
        </form>
    </div>
  )
}
