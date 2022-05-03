import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getBeaches } from '../../store/beaches'

const BeachList = () => {
    const dispatch = useDispatch();
    const beaches = useSelector(state => state.beachState)
    console.log(beaches)

    useEffect(() => {
        dispatch(getBeaches());
    }, [dispatch])

    return (
        <div>
            <h1>Beach List</h1>
            <ol>
               {beaches.map((beach) => (
                    <li key={beach.id}>{beach.name}</li>
               ))}
            </ol>
        </div>
    )
}

export default BeachList;
