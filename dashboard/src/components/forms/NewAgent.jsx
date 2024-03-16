import React, { useState } from 'react';
import AdminSidebar from "../AdminSidebar"
import axios from 'axios';
// CREATE FORM 
const Agent = () => {

    const [agentData, setAgentData] = useState({
        name: '',
        email: '',
        phone_number: '',
        pan_number: '',
        agent_code: '',
        city: ''

    });

    const handleChange = (e) => {
        setFormData({...agentData,[e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/submit' , agentData);
            alert('Agent data submitted successfully');
            setAgentData({name: '', email: '', phone_number: '', pan_numbar: '',  agent_code: '', city: ''});
        }catch (error) {
            alert('Failed to submit form');
        }
    };

    return (
        <div>
            {/* <AdminSidebar /> */}
            <div>
                <form className="container" onSubmit={handleSubmit}>
                    <div className="header">

                        <h1>Agent From</h1>
                    </div>

                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" placeholder="Enter Your Name" value={agentData.name} name="name" onChange={handleChange} />
                    </div>


                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" placeholder="Enter your Email" value={agentData.email} name="email" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="phone_number">Phone Number:</label>
                        <input type="phone_number" id="address" placeholder="Enter your Phone Number" value={agentData.phone_number} name="phone_number" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="pan_number">PAN Number:</label>
                        <input type="pan_number" id="pan_number" placeholder="Enter your PAN Number" value={agentData.pan_number} name="pan_number" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="agent_code">Agent Code:</label>
                        <input type="agent_code" id="agent_code" placeholder="Enter Agent Code" value={agentData.agent_code} name="agent_code" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="city">City:</label>
                        <input type="text" id="city" placeholder="city name" value={agentData.city} name="city" onChange={handleChange}/>
                    </div>

                   <button type='submit'>Submit</button>

                </form>
            </div>
        </div>

    );
}


export default Agent;