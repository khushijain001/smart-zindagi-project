import axios from 'axios';
import React, { useState } from 'react';

//CREATE FORM FOR RM
const Rm = () => {

    const [rmData, setRmData] = useState({
        name: '',
        email: '',
        address: '',
        phone_number: '',
        pan_number: '',
        agent_code: ''
    });

    const handleChange = (e) => {
        setRmData({...rmData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:3000/api/rm-registration', rmData);
            alert('Form data submitted successfully');
            setRmData({name: '', email: '', address: '', phone_number: '', pan_number: '', agent_code: ''});
        }catch(error) {
            alert('Failed to submit form');
        }
    }
    return (
        <form className="container" onSubmit={handleSubmit}>
            <div  className="header">
           
                <h1>RM From</h1>
            </div>


            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder="Enter Your Name" value={rmData.name} name="name" onChange={handleChange} />
            </div>
             
           
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Enter your Email" value={rmData.email} name="email" onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" placeholder="Enter your Address" value={rmData.address} name="address" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="phone_number">Phone Number:</label>
                <input type="phone_number" id="address" placeholder="Enter your Phone Number" value={rmData.phone_number} name="phone_number" onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="pan_number">PAN Number:</label>
                <input type="pan_number" id="pan_number" placeholder="Enter your PAN Number" value={rmData.pan_number} name="pan_number" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="agent_code">Agent Code:</label>
                <input type="agent_code" id="agent_code" placeholder="Enter Agent Code" value={rmData.agent_code} name="agent_code" onChange={handleChange} />
            </div>

            <button type='submit'>Submit</button>



        </form>
    );
}


export default Rm;