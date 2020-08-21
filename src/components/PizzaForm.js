import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';


const formSchema = yup.object().shape({
    size: yup
        .string(),
    l337Sauce: yup
        .boolean(),
    Noobsauce: yup
        .boolean(),
    spicymeme: yup
        .boolean(),
    salt: yup
        .boolean(),
    SPAM: yup
        .boolean(),
    FRIEDCHICKEN: yup
        .boolean(),
    GENERALTSO: yup
        .boolean(),
    SESAMEFRIEDCHICKEN: yup
        .boolean(),
    name: yup
        .string()
        .min(2, "Name must include 2 letters")
        .required("Name is required"),
    instructions: yup
        .string()
});

function Pizzaform() {

    const [userList, setUserList] = useState([]);

    const [formState, setFormState] = useState({
        size: "",
        l337Sauce: false,
        Noobsauce: false,
        spicymeme: false,
        salt: false,
        peppersoni: false,
        FRIEDCHICKEN: false,
        GENERALTSO: false,
        SESAMEFRIEDCHICKEN: false,
        name: "",
        instructions: "",
    })


    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            setButtonDisabled(!valid);
        })
    }, [formState]);

    const [errorState, setErrorState] = useState({
        size: "",
        l337Sauce: "",
        Noobsauce: "",
        spicymeme: "",
        salt: "",
        SPAM: "",
        FRIEDCHICKEN: "",
        GENERALTSO: "",
        SESAMEFRIEDCHICKEN: "",
        name: "",
        instructions: "",
    });

    const validate = e => {
        let value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
        yup
        .reach(formSchema, e.target.name)
        .validate(value)
        .then(valid => {
            setErrorState({
            ...errorState,
            [e.target.name]: ""
            });
        })
        .catch(err => {
            setErrorState({
            ...errorState,
            [e.target.name]: err.errors[0]
            });
        });
    };

    const inputChange = e => {
        e.persist();
        validate(e);
        let value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({ ...formState, [e.target.name]: value });
    };

    const formSubmit = e => {
        e.preventBlank();
        axios
            .post("https://reqres.in/api/users", formState)
            .then(response => {
                const apiReturn = response.data
                console.log(response.data)
                setUserList([...userList, apiReturn])
                setFormState(formState)
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <form onSubmit={formSubmit}>
                <div className="pizza-size">
                    <label htmlFor="size">
                        <h2>Choice of size</h2>
                        <p>Required</p>
                        <select
                            value={formState.size}
                            name="size"
                            id="size"
                            onChange={inputChange}
                        >
                            <option value="Blank">Size?</option>
                            <option value="ScriptKiddy">ScriptKiddy</option>
                            <option value="DDOSer  ">DDOSer  </option>
                            <option value="Greyhat">Greyhat</option>
                            <option value="BlackHat">BlackHat</option>
                            <option value="Whitehat">Whitehat</option>
                        </select>
                        {errorState.size.length > 0 ? (
                            <p className="error">{errorState.size}</p>
                        ) : null}
                    </label>
                </div>
                <div className="pizza-sauce">
                    <h2>SELECT YOUR SAUCE</h2>
                    
                    <label htmlFor="l337Sauce">
                        1337 Sauce:
                        <input
                            type="checkbox"
                            id="l337Sauce"
                            name="l337Sauce"
                            checked={formState.l337Sauce}
                            onChange={inputChange}
                        />
                        {errorState.l337Sauce.length > 0 ? (
                        <p className="error">{errorState.l337Sauce}</p>
                        ) : null}
                    </label>
                    <br></br>
                    <label htmlFor="Noobsauce">
                        Noobsauce:
                        <input
                            type="checkbox"
                            id="Noobsauce"
                            name="Noobsauce"
                            checked={formState.Noobsauce}
                            onChange={inputChange}
                        />
                        {errorState.Noobsauce.length > 0 ? (
                        <p className="error">{errorState.Noobsauce}</p>
                        ) : null}
                    </label>
                    <br></br>
                    <label htmlFor="spicymeme">
                        spicymeme:
                        <input
                            type="checkbox"
                            id="spicymeme"
                            name="spicymeme"
                            checked={formState.spicymeme}
                            onChange={inputChange}
                        />
                        {errorState.spicymeme.length > 0 ? (
                        <p className="error">{errorState.spicymeme}</p>
                        ) : null}
                    </label>
                    <br></br>
                    <label htmlFor="salt">
                        salt:
                        <input
                            type="checkbox"
                            id="salt"
                            name="salt"
                            checked={formState.salt}
                            onChange={inputChange}
                        />
                        {errorState.salt.length > 0 ? (
                        <p className="error">{errorState.salt}</p>
                        ) : null}
                    </label>
                </div>
                <div className="special">
                    <label htmlFor="instructions">
                        extras:
                        <br></br>
                        <textarea
                            name="instructions"
                            id="instructions"
                            placeholder="Anything else you would like to add?"
                            value={formState.instructions}
                            onChange={inputChange}
                        />
                    </label>
                </div>
                <div className="pizza-toppings">
                    <h1>MEAT WHAT U WANT</h1>
                    <h5>Choose 4 </h5>
                    
                    <label htmlFor="SPAM">
                        SPAM:
                        <input
                            type="checkbox"
                            id="SPAM"
                            name="SPAM"
                            checked={formState.SPAM}
                            onChange={inputChange}
                        />
                        
                        {errorState.SPAM.length > 0 ? (
                        <p className="error">{errorState.SPAM}</p>
                        ) : null}
                    </label>
                    <br></br>
                    <label htmlFor="FRIEDCHICKEN">
                        FRIED CHICKEN:
                        <input
                            type="checkbox"
                            id="FRIEDCHICKEN"
                            name="FRIEDCHICKEN"
                            checked={formState.FRIEDCHICKEN}
                            onChange={inputChange}
                        />
                        {errorState.FRIEDCHICKEN.length > 0 ? (
                        <p className="error">{errorState.FRIEDCHICKEN}</p>
                        ) : null}
                    </label>
                    <br></br>
                    <label htmlFor="GENERALTSO">
                        GENERAL TSO FRIED CHICKEN:
                        <input
                            type="checkbox"
                            id="GENERALTSO"
                            name="GENERALTSO"
                            checked={formState.GENERALTSO}
                            onChange={inputChange}
                        />
                        {errorState.GENERALTSO.length > 0 ? (
                        <p className="error">{errorState.GENERALTSO}</p>
                        ) : null}
                    </label>
                    <br></br>
                    <label htmlFor="SESAMEFRIEDCHICKEN">
                        SESAME FRIED CHICKEN:
                        <input
                            type="checkbox"
                            id="SESAMEFRIEDCHICKEN"
                            name="SESAMEFRIEDCHICKEN"
                            checked={formState.SESAMEFRIEDCHICKEN}
                            onChange={inputChange}
                        />
                        {errorState.SESAMEFRIEDCHICKEN.length > 0 ? (
                        <p className="error">{errorState.SESAMEFRIEDCHICKEN}</p>
                        ) : null}
                    </label>
                    <div className="special">
                    <label htmlFor="instructions">
                        extras
                        <br></br>
                        <textarea
                            name="instructions"
                            id="instructions"
                            placeholder="Anything else you would like to add?"
                            value={formState.instructions}
                            onChange={inputChange}
                        />
                    </label>
                </div>
                </div>
                
                <div className="name-div">
        <label htmlFor="name">
           ENTER NAME
            <br></br>
            <input
                id="name"
                type="text"
                name="name"
               
                placeholder="Must have at least 2 characters"
                value={formState.name}
                onChange={inputChange}
                />
                {errorState.name.length > 0 ? (
                    <p className="error">{errorState.name}</p>
                ) : null}
        </label>
        </div>
                <div className="submit-button">
                    <button disabled={buttonDisabled}>Submit</button>
                </div>
            </form>
            
        </div>
    )

    }



export default Pizzaform;
