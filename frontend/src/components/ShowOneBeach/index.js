import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getOneBeach, loadOneBeach } from '../../store/beaches'
import { useEffect, useState } from 'react';


import './ShowOneBeach.css'

const ShowOneBeach = () => {

    const { beachId } = useParams();
    const dispatch = useDispatch();
    const beach = useSelector(state => state.beaches[beachId])

    console.log("HELLO FROM ONEBEACHFORM------------",beachId)

    useEffect(() => {
        dispatch(loadOneBeach(beachId))
    }, [dispatch, beachId]);

    return (
        <div>
            <h1>One Beach</h1>
                <h2>{beach.name}</h2>
        </div>
    )
}

export default ShowOneBeach;
