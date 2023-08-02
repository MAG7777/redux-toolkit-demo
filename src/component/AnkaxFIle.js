import { useSelector } from "react-redux"

export default function AnkaxFIle() {

    const data = useSelector(state => state.counterReducer.count)
    return (
        <>
            <h1>
                Indepented information from store
            </h1>
            <h1>{data}</h1>
        </>
    )
}