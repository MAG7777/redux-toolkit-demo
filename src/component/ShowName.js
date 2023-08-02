import { useSelector } from "react-redux"

export default function ShowName(){
    const name = useSelector(state=>state.counterReducer.name)
    return <h1>NAME FROM PROPS {name}</h1>
}