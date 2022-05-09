import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createOneBeach, updateBeachThunk} from "../../store/beaches";
import { populateUserBeaches } from "../../store/userBeaches"


const Categories = [
    "Saltwater",
    "Freshwater",
    "White Sand",
    "Black Sand",
    "Cave"
]

const EditOneBeach = () => {
    const history = useHistory();

    const { beachId } = useParams();

    const userId = useSelector(state => state.session.user.id)
    const dispatch = useDispatch();
    const beachObj = useSelector(state => state.userBeaches)
    const beach = beachObj[beachId]

    const oldAddress = beach.address
    const oldCategory = beach.category
    const oldCity = beach.city
    const oldDescription = beach.description
    const oldId = beach.id
    const oldName = beach.name
    const oldState = beach.state
    const oldZipcode = beach.zip_code

    const [name, setName] = useState(oldName);

    const [category, setCategory] = useState(oldCategory);
    const [description, setDescription] = useState(oldDescription);
    const [address, setAddress] = useState(oldAddress);
    const [city, setCity] = useState(oldCity);
    const [state, setState] = useState(oldState)
    const [zipcode, setZipcode] = useState(oldZipcode)
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

       dispatch(updateBeachThunk(payload, oldId))
        .then(()=> dispatch(populateUserBeaches(userId)))
        .then(() => history.push(`/${userId}/beaches`))


    }

    return (
        <div className="ab-container">
            <form
                className="ab-add-new-beach"
                //add onsubmit
                onSubmit={handleSubmit}
            >
                <h2 className="ab-header">Edit Beach</h2>
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

export default EditOneBeach;
