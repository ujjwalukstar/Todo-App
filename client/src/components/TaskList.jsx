import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../redux/task/taskSlice.js';
import { useState } from 'react';

export default function TaskList() {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();
  const [newText, setNewText] = useState('');

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleUpdate = (taskId) => {
    // Implement the logic to update the task
    dispatch(updateTask({ id: taskId, newText }));
    setNewText(''); // Reset the newText state after updating
  };

  return (
    <div>
      <h1 className="text-3xl text-left mt-4">List of tasks</h1>
      <ul className="mt-2">
        {tasks.map((task) => (
          <li className="flex justify-between text-xl py-2 bg-slate-100 rounded-lg mb-2 px-2 items-center" key={task.id}>
            {task.text}{' '}
            <div>
              <input
                type="text"
                placeholder="New text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="mr-2 p-2 rounded-lg"
              />
              <button onClick={() => handleUpdate(task.id)} className="bg-blue-600 p-2 text-lg hover:opacity-80 rounded-lg text-white">
                Update
              </button>
              <button onClick={() => handleDelete(task.id)} className="bg-red-600 p-2 text-lg hover:opacity-80 rounded-lg text-white">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
