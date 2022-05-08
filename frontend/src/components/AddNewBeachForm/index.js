import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createOneBeach, getBeaches} from "../../store/beaches";

const Categories = [
    "Saltwater",
    "Freshwater",
    "White Sand",
    "Black Sand",
    "Cave"
]

const AddNewBeachForm = () => {
    const history = useHistory();

    const userId = useSelector(state => state.session.user.id)
    const dispatch = useDispatch();

    const [name, setName] = useState("");

    const [category, setCategory] = useState(Categories[0]);
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("")
    const [zipcode, setZipcode] = useState("00000")
    const [errors, setErrors] = useState([]);

    const updateName = (e) => setName(e.target.value)
    const updateCategory = (e) => setCategory(e.target.value)
    const updateDescription = (e) => setDescription(e.target.value)
    const updateAddress = (e) => setAddress(e.target.value)
    const updateCity = (e) => setCity(e.target.value)
    const updateState = (e) => setState(e.target.value)
    const updateZipcode = (e) => setZipcode(e.target.value)

    useEffect(() => {
        const validations = [];
        if (name.length < 5) validations.push("Please enter a longer name");
        if (name.length > 100) validations.push("Please enter a shorter name");
        if (description.length === 0) validations.push("Please tell us about this awesome beach! :D")
        if (address.length === 0 || address.length > 80) validations.push("Please check address again")
        if (city.length === 0 ) validations.push("Please check city")
        if (state.length === 0 ) validations.push("Please check state")
        if (zipcode.length === 0 ) validations.push("Please check zipcode")
        setErrors(validations);
    }, [name, description, address, city, state, zipcode])

    const handleSubmit = e => {
        e.preventDefault()

        const payload = {
            userId,
            name,
            category,
            description,
            address,
            city,
            state,
            zipcode
        }
        dispatch(createOneBeach(payload))
            .then(() => dispatch(getBeaches()))
        history.push(`/beaches`)
    }

    return (
        <div className="ab-container">
            <form
                className="ab-add-new-beach"
                onSubmit={handleSubmit}
            >
                <h2 className="ab-header">Add A New Beach</h2>
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
                    className="ab-button"
                    disabled={errors.length > 0}
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddNewBeachForm;
