import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import * as sessionctions from "../../store/session"
// import { createOneBeach } from '../../store/beaches'
import { createOneBeach } from "../../store/beaches";
import "./AddNewBeachForm.css"

const Categories = [
    "Saltwater",
    "Freshwater"
]
//Array of us states??
// const states = [CA, SD]

const AddNewBeachForm = ({ hideForm }) => {
    const history = useHistory();

    const beach = useSelector(state => state.beach)

    const dispatch = useDispatch();
    //might need session user??
    const [name, setName] = useState("");
    //category will be a drop down = options: saltwater beach or freshwater beach
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    //might be a drop down of us states
    const [state, setState] = useState("")
    const [zipcode, setZipcode] = useState("00000")
    const [errors, setErrors] = useState([]);
    //not creating one for phone number

    const updateName = (e) => setName(e.target.value)
    const updateCategory = (e) => setCategory(e.target.value)
    const updateDescription = (e) => setDescription(e.target.value)
    const updateAddress = (e) => setAddress(e.target.value)
    const updateCity = (e) => setCity(e.target.value)
    const updateState = (e) => setState(e.target.value)
    const updateZipcode = (e) => setZipcode(e.target.value)


    useEffect(() => {
        const validations = [];
        if (name.length < 5) validations.push("please enter longer name")
        setErrors(validations);
    }, [name])

    const handleSubmit = e => {
        e.preventDefault()

        const payload = {
            name,
            category,
            description,
            address,
            city,
            state,
            zipcode
        }
       dispatch(createOneBeach(payload))
        // console.log(payload)

        history.push("/beaches")
    }

    // const createdBeach = await dispatch(createOneBeach(payload))

    // if (createdBeach) {
    //     history.push(`/beach/${createdBeach.id}`);
    //     hideForm();
    // }


    return (
        <section>
            <form
                className="add-new-beach"
                //add onsubmit
                onSubmit={handleSubmit}
            >
                <h2>Add A New Beach</h2>
                <ul className="errors">
                    {errors.map( error => (
                        <li key={error} id="form-error">{error}</li>
                    ))}
                </ul>
                <label>
                Name
                    <input
                        type="text"
                        placeholder="name"
                        value={name}
                        onChange={updateName}
                    >
                    </input>
                </label>

                <label>
                    Category
                    <select
                        value={category}
                        onChange={updateCategory}
                    >
                        {Categories.map(category => (
                            <option
                                key={category}
                            >
                                {category}
                            </option>
                        ))}
                    </select>
                </label>

                <label>
                    Description
                    <input
                        type="text"
                        placeholder="Wowow!"
                        value={description}
                        onChange={updateDescription}
                    >
                    </input>
                </label>

                <label>
                    Address
                    <input
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={updateAddress}
                    >
                    </input>
                </label>

                <label>
                    City
                    <input
                        type="text"
                        placeholder="City"
                        value={city}
                        onChange={updateCity}
                    >
                    </input>
                </label>

                State
                <input
                    type="text"
                    placeholder="State"
                    value={state}
                    onChange={updateState}
                >
                </input>

                Zip code
                <input
                    type="text"
                    placeholder="00000"
                    value={zipcode}
                    onChange={updateZipcode}
                ></input>
                <button
                    disabled={!!errors.length}
                    type="submit"
                >Submit</button>
            </form>
        </section>
    )
}

export default AddNewBeachForm;
