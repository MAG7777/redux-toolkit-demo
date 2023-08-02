import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {changeName, onCHnageNmae} from '../store/counterReducer';

export default function CreateNmae(){

    const dispatch = useDispatch()
    const onName = useSelector(state=>state.counterReducer.onName)

    const [name, setNmae]=useState('');

    const handleOnChange = (e)=>{
        dispatch(onCHnageNmae(e.target.value));

    }

    return(
        <div>
            <input type="text" value={onName} onChange={handleOnChange}/>
            <button onClick={()=>dispatch(changeName(name))}>Send name</button>
        </div>
    )
}