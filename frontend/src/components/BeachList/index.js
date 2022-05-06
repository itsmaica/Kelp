import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Switch, Route, NavLink, useParams } from "react-router-dom"
import { getBeaches, getOneBeach } from '../../store/beaches'
import ShowOneBeach from "../ShowOneBeach"

import './BeachList.css'

const BeachList = () => {

    const {beachId} = useParams();
    console.log("This is beach id", beachId)

    const dispatch = useDispatch();
    const beaches = useSelector(state => state.beaches)

    useEffect(() => {
        dispatch(getBeaches());
    }, [dispatch])

    const clickBeach = (beachId) => {
        return dispatch(getOneBeach(beachId))
    }

    return (
        <div>
            <h1>Beach List</h1>
                <ul>
                    { Object.values(beaches).map(beach =>(
                    <li className ="each-beach" key={beach.id}>
                        <a href={`/beaches/${beach.id}`}>
                            {beach.name}
                        </a>
                    </li>
                    ))}
                </ul>
        </div>
    )
}

export default BeachList;
