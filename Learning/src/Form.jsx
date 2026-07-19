//handle multiple Inputs
import {useState} from 'react';
export default function Form() {
    let [formData, setFormData] = useState({
        fullName : "",
        password : "",
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return {...currData, [event.target.name] : event.target.value} ;
        });


    //    let fieldName = event.target.name;
      //  let newValue = event.target.value;
//
  //      setFormData((currData) => {
    //        currData[fieldName] = newValue;
        //    return {...currData};
       // });
    };

    let hanldeSubmit = (event) =>{
        event.preventDefault();
        console.log(formData);
        setFormData({
             fullName : "",
             password : "",
        });
    };
    return(
        <form onSubmit={hanldeSubmit}>
            <label htmlFor='fullName' > Full Name: </label>
            <input placeholder='enter full name' id='fullName'
            type="text" value={formData.fullName} name='fullName'
            onChange={handleInputChange} />
            <br></br>
            <br></br>
            <label htmlFor='password'>Password : </label>
            <input placeholder='enter Password' type='password'
            id='password' name='password' value={formData.password}
            onChange={handleInputChange}/>
            <button>Submit</button>
        </form>
        
    )
}