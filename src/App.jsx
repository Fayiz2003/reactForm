import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    email: "",
    gender: "",
    dob: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (validateForm()) {
      alert(`Data stored successfully:\n
        Name: ${formData.name}\n
        Address: ${formData.address}\n
        Mobile: ${formData.mobile}\n
        Email: ${formData.email}\n
        Gender: ${formData.gender}\n
        Date of Birth: ${formData.dob}\n
        Course: ${formData.course}`);
      resetForm();
    }
  };

  const handleCancel = () => {
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: "",
      address: "",
      mobile: "",
      email: "",
      gender: "",
      dob: "",
      course: "Biology",
    });
  };

  const validateForm = () => {
    const { name, address, mobile, email, gender, dob } = formData;
    if (!name || !address || !mobile || !email || !gender || !dob) {
      alert("Please fill in all fields");
      return false;
    }
    if (!/^\d{10}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }
    return true;
  };

  return (
    <div className='row'>
      <div className='col-3'></div>
      <div className='col-6 mt-5 bg-light fw-bolder'>
        <h1 className='text-center mb-5 mt-3'>REGISTRATION FORM</h1>
        <form className='ps-5' onSubmit={handleSubmit}>
            <div className='my-3'>
              <label htmlFor="name">Name : </label>
              <input name="name" value={formData.name} onChange={handleChange} style={{ height: '40px' }} className='ms-5 w-75' type="text"/>
            </div>
            <div>
              <label htmlFor="address">Address : </label>
              <textarea name="address" value={formData.address} onChange={handleChange} className='w-75' style={{ marginLeft: '31px' }}/>
            </div>
            <div className='my-3'>
              <label htmlFor="mobile">Mobile : </label>
              <input name="mobile" value={formData.mobile} onChange={handleChange} style={{ marginLeft: '40px', height: '40px' }} className='w-75' type="text"/>
            </div>
            <div>
              <label htmlFor="email">Email : </label>
              <input name="email" value={formData.email} onChange={handleChange} style={{ marginLeft: '51px', height: '40px' }} className='w-75' type="text"/>
            </div>
            <div className='my-3'>
              <label htmlFor="gender">Gender : </label>
              <select name="gender" value={formData.gender} onChange={handleChange} style={{ marginLeft: '37px', height: '40px' }} className='w-75'>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="dob">D.O.B : </label>
              <input name="dob" value={formData.dob} onChange={handleChange} style={{ marginLeft: '50px', height: '40px' }} className='w-75' type="date"/>
            </div>
            <div className='my-3'>
              <label htmlFor="course">Course : </label>
              <select name="course" value={formData.course} onChange={handleChange} style={{ marginLeft: '40px', height: '40px' }} className='w-75'>
                <option value="Biology">Biology</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Commerce">Commerce</option>
                <option value="Humanities">Humanities</option>
              </select>
            </div>
            <div className='text-center'>
              <button className='btn btn-success fw-bolder m-3'>Register</button>
              <button type="button" className='btn btn-danger fw-bolder' onClick={handleCancel}>Cancel</button>
            </div>
        </form>
      </div>
      <div className='col-3'></div>
    </div>
  );
}

export default App;
