import React, { useState } from 'react';
import axios from 'axios';
// FORM FOR NEW AGENTS by admin
const Createform = () => {

    const [createData, setCreateData] = useState({
        user_id: '',
        password: '',
        parent: '',
        distributor_type: '',
        name: '',
        euin: '',
        default_commission: '',
        monthly_salary: '',
        salary_justification_multiplier: '',
        other_fixed_expenses: '',
        address: '',
        city: '',
        pin: '',
        state: '',
        contact: '',
        phone_number: '',
        fax: '',
        email: ''

       
    });

    const handleChange = (e) => {
        setCreateData({...createData, [e.target.name]: e.target.value });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:3000/api/create-form', createData);
            alert('Form data submitted successfully');
            setRmData({ user_id: '',
            password: '',
            parent: '',
            distributor_type: '',
            name: '',
            euin: '',
            default_commission: '',
            monthly_salary: '',
            salary_justification_multiplier: '',
            other_fixed_expenses: '',
            address: '',
            city: '',
            pin: '',
            state: '',
            contact: '',
            phone_number: '',
            fax: '',
            email: ''});
        }catch(error) {
            alert('Failed to submit form');
        }
    }

   
  return (
    <form onSubmit={handleSubmit}>
        <div  className="header">
           
           <h1>Create New From</h1>
       </div>

       <div>
            <label htmlFor="userid">User Id:</label>
            <input type="text" id="userid" placeholder="Enter Your User Id" value={createData.user_id} name="user_id" onChange={handleChange} />
       </div>
       <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter Your Password" value={createData.password} name="password" onChange={handleChange} />
       </div>
       <div>
              <label htmlFor="parent">Parent:</label>
              <select id="parent" name="parent">
                <option value="smartzindagi">Smart Zindagi</option>
               
              </select>
        </div>
        <div>
              <label htmlFor="distributor-type">Distributor Type:</label>
              <select id="distributor-type" name="distributor_type">
                <option value="regional office">Regional Office</option>
                <option value="branch">Branch</option>
                <option value="relationship manager">Relationship Manager(RM)</option>
                <option value="sub broker">Sub Broker</option>
                <option value="agent">Agent</option>
              </select>
        </div>
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Enter Your Name" value={createData.name} name="name" onChange={handleChange} />
       </div>
       <div>
            <label htmlFor="euin">EUIN:</label>
            <input type="text" id="euin" placeholder="Enter EUIN" value={createData.euin} name="euin" onChange={handleChange} />
       </div>
       <div>
            <label htmlFor="default-commission">Default Commission:</label>
            <input type="text" id="default-commission" placeholder="Enter Default Commission" value={createData.default_commission} name="default_commission" onChange={handleChange} />
       </div>
       <div>
            <label htmlFor="monthly-salary">Monthly Salary/Retainership:</label>
            <input type="text" id="monthly-salary" placeholder="Enter Your Monthly Salary/Retainership" value={createData.monthly_salary} name="monthly_salary" onChange={handleChange} />
       </div>
       <div>
              <label htmlFor="salary-justification-multiplier">Parent:</label>
              <select id="salary-justification-multiplier" name="salary_justification_multiplier">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
        </div>
        <div>
            <label htmlFor="other-fixed-monthly-expenses">Monthly Salary/Retainership:</label>
            <input type="text" id="other-fixed-monthly-expenses" placeholder="Enter Your Other Fixed Monthly Expenses (Other CTC)" value={createData.other_fixed_expenses} name="other_fixed_expenses" onChange={handleChange} />
       </div>
       <div>
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" placeholder="Enter Your Address" value={createData.address} name="address" onChange={handleChange} />
       </div>
       <div>
            <label htmlFor="city">City:</label>
            <input type="text" id="city" placeholder="Enter Your City" value={createData.city} name="city" onChange={handleChange} />
       </div>
       <div>
            <label htmlFor="pin">PIN:</label>
            <input type="text" id="pin" placeholder="Enter Your Pin" value={createData.pin} name="pin" onChange={handleChange} />
       </div>
       <div>
            <label htmlFor="state">State:</label>
            <input type="text" id="state" placeholder="Enter Your State" value={createData.state} name="state" onChange={handleChange} />
       </div>
       <div>
            <label htmlFor="contact">Contact:</label>
            <input type="text" id="contact" placeholder="Enter Your Contact" value={createData.contact} name="contact" onChange={handleChange} />
       </div>
       <div>
            <label htmlFor="phone">Phone No.:</label>
            <input type="text" id="phone" placeholder="Enter Your Phone Number" value={createData.phone_number} name="phone_number" onChange={handleChange} />
       </div>
       <div>
            <label htmlFor="fax">FAX:</label>
            <input type="text" id="fax" placeholder="Enter Fax" value={createData.fax} name="fax" onChange={handleChange} />
       </div>
       <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter Your Email" value={createData.email} name="email" onChange={handleChange} />
       </div>

       <button type='submit'>Submit</button>
             

    </form>
   
  )
}

export default Createform