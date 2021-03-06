import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getOneBeach, loadOneBeach } from '../../store/beaches'
import { useEffect, useState } from 'react';

import './ShowOneBeach.css'

const ShowOneBeach = () => {

    const { beachId } = useParams();

    const dispatch = useDispatch();
    const beach = useSelector(state => state.beaches.beach)

    useEffect(() => {
        dispatch(getOneBeach(beachId))
    }, [dispatch, beachId]);

    return (
        <div>
            <h1>Delete This Beach</h1>
                {beach ?
                    <div>
                        <h2>{`${beach.name}`}</h2>
                            <p>{beach.category}</p>
                            <p>{beach.description}</p>
                            <p>{beach.address}</p>
                            <p>{beach.city}</p>
                            <p>{beach.state}</p>
                            <p>{beach.city}</p>
                            <p>{beach.zip_code}</p>
                            <button>Edit</button>
                            <button>Delete</button>

                    </div>
                : "Loading"}
        </div>
    )
}

export default ShowOneBeach;
