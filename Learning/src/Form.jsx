import {useState} from 'react';
export default function Form() {
    let [fullName, setFullName] = useState("Asif");

    let handleChange = (event) => {
        setFullName(event.target.value);
    };
    return(
        <form>
            <label htmlFor='username' > Full Name: </label>
            <input placeholder='enter full name' id='username'
            type="text" value={fullName}
            onChange={handleChange} />
            <button>Submit</button>
        </form>
        
    )
}