import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import * as sessionctions from "../../store/session"
import "./AddNewBeachForm.css"


//Array of us states??
// const states = [CA, SD]

const AddNewBeachForm = () => {
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
    //not creating one for phone number

    const updateName = (e) => setName(e.target.value)
    const updateCategory = (e) => setCategory(e.target.value)
    const updateDescription = (e) => setDescription(e.target.value)
    const updateAddress = (e) => setAddress(e.target.value)
    const updateCity = (e) => setCity(e.target.value)
    const updateState = (e) => setState(e.target.value)
    const updateZipcode = (e) => setZipcode(e.target.value)



    return (
        <section>
            <form
                className="add-new-beach"
                //add onsubmit
            >
                Name
                <input
                    type="text"
                    placeholder="Name"
                    onChange={updateName}
                >
                </input>

                Category
                <input
                    type="text"
                    placeholder="type of beach"
                    onChange={updateCategory}
                >
                </input>

                Description
                <input
                    type="text"
                    placeholder="Wowow!"
                    onChange={updateDescription}
                >
                </input>

                Address
                <input
                    type="text"
                    placeholder="Address"
                    onChange={updateAddress}
                >
                </input>

                City
                <input
                    type="text"
                    placeholder="Address"
                    onChange={updateCity}
                >
                </input>

                State
                <input
                    type="text"
                    placeholder="State"
                    onChange={updateState}
                >
                </input>

                Zip code
                <input
                    type="text"
                    placeholder="00000"
                    onChange={updateZipcode}
                ></input>
                <button>Submit</button>
            </form>
        </section>
    )
}

export default AddNewBeachForm;
