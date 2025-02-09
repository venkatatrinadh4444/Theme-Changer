import './index.css'
import {StoreContext} from '../../App'
import { useContext } from 'react'

const Navbar=()=> {
    const {state,dispatch}=useContext(StoreContext)

    const changeHandler=e=> {
        dispatch({type:"modeChange",payload:e.target.value})
    }

    const bgChangeHandler=e=> {
        dispatch({type:"bgChange",payload:e.target.value})
    }

    return (
        <div className="navbar">
            <h2>My Application</h2>
            <div className="inputs">
                <select value={state.mode} onChange={changeHandler}>
                    <option value="telugu">Telugu</option>
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="tamil">Tamil</option>
                </select>
                <select value={state.bgChange} onChange={bgChangeHandler}>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </div>
        </div>
    )
}
export default Navbar