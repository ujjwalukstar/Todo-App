import './App.css'
import InputBox from './components/InputBox'
import TaskList from './components/TaskList'

function App() {

  return (
    <div className='max-w-3xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center mt-2'>
        Todo Web App
      </h1>

        <InputBox/>
        <TaskList/>
    </div>
  )
}

export default App
