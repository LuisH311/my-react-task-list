import './App.css'
import Footer from './Componentes/Footer'
import Header from "./Componentes/Header"
import Task from './Componentes/Task'



function App() {
  
  return (
    <div className='SuperContainer'>
    <div className="Container">
    <Header/>
    <Task /* createNewTask ={createNewTask} *//>
    <Footer/>
    </div>
    </div>
  )
}

export default App
