import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getOneBeach, loadOneBeach } from '../../store/beaches'
import { useEffect } from 'react';


import './ShowOneBeach.css'

const ShowOneBeach = () => {

    const { beachId } = useParams();

    const dispatch = useDispatch();
    const beaches = useSelector(state => state.beaches)

    // const beachId = useSelector(state => state.beaches.id)
    const { name, category, description, address, city, state, zipcode } = beaches.find(beach => beach.id === beachId)

    console.log("HELLO FROM ONEBEACHFORM------------",beachId)


    useEffect(() => {
        dispatch(getOneBeach())
    }, []);

    return (
        <div>
            <h1>One Beach</h1>
                <h2>{beaches.id}</h2>
        </div>
    )
}

export default ShowOneBeach;
