import './App.css'
import Footer from './Componentes/Footer'
import Header from "./Componentes/Header"
import Task from './Componentes/Task'
import TaskList from './Componentes/TaskList'


function App() {
  
  return (
    <div className='SuperContainer'>
    <div className="Container">
    <Header/>
    <TaskList/>
    <Task/>
    <Footer/>
    


    </div>
    </div>
  )
}

export default App
