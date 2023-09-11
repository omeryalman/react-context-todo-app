import './App.css'
import Navbar from './components/Navbar'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Footer from './components/Footer'



function App() {



  return (
   <div>
    <Navbar/>
   
    <div className='halfWrapper'>
   
      <div className='half'>
      <h1>TASK LİSTS</h1>
    <TodoForm/>
    </div>

    <div className='half'>
    <h1>TASK</h1>
    <TodoList/>
    </div>

    </div>
    <Footer/>
    </div>
  )
}

export default App
