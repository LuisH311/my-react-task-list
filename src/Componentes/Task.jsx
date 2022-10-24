import { FaEdit } from 'react-icons/fa'
import { AiOutlineDelete } from 'react-icons/ai'


function Task() {
    return <div className='task'>
        <div className='task1'>
            <input type="radio" className='radio'></input><br></br>
            <h4>Buy a new gaming laptop</h4>
            <div className='alinear'>
                <button className='buton'><FaEdit /></button>
                <button className='buton1'><AiOutlineDelete /></button><br></br>
            </div>
        </div>

        <div className='task1'>
            <input type="radio" className='radio'></input>
            <h4>Complete a previous task</h4>
            <div className='alinear'>
                <button className='buton'><FaEdit /></button>
                <button className='buton1'><AiOutlineDelete /></button><br></br>
            </div>
        </div>

        <div className='task1'>
            <input type="radio" className='radio'></input><br></br>
            <del><h4>Buy a new gaming laptop</h4></del>
            <div className='alinear'>
                <button className='buton'><FaEdit /></button>
                <button className='buton1'><AiOutlineDelete /></button><br></br>
            </div>
        </div>

        <div className='task1'>
            <input type="radio" className='radio'></input><br></br>
            <del><h4>Buy a new gaming laptop</h4></del>
            <div className='alinear'>
                <button className='buton'><FaEdit /></button>
                <button className='buton1'><AiOutlineDelete /></button><br></br>
            </div>
        </div>
    </div>
}


export default Task;