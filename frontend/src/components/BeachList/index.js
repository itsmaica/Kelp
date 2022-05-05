import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Switch, Route, NavLink } from "react-router-dom"
import { getBeaches } from '../../store/beaches'
import ShowOneBeach from "../ShowOneBeach"

import './BeachList.css'

const BeachList = () => {
    const dispatch = useDispatch();
    const beaches = useSelector(state => state.beaches)

    useEffect(() => {
        dispatch(getBeaches());
    }, [dispatch])

    return (
        <div>
            <h1>Beach List</h1>
            <ol>
                { Object.values(beaches).map(beach =>(
                <li key={beach.id}>{beach.name}</li>
                ))}
            </ol>

            <Switch>
                <Route path="/beaches/:beachId">
                    <ShowOneBeach />
                </Route>
            </Switch>
        </div>
    )
}

export default BeachList;
