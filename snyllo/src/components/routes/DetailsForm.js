import React, { useState } from 'react';
import './DetailsForm.css';

const DetailsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: '',
    location: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('Backend_url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('User details submitted successfully');
        // You can show a success message or redirect the user here
      } else {
        console.error('Failed to submit user details');
        // You can show an error message here
      }
    } catch (error) {
      console.error('Error submitting user details:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="form-part">
        <form id="form-section" onSubmit={handleSubmit}>
          <h1 className="head">Our Experts Have All The Answers For You</h1>
          <input type="text" placeholder="Your Name" name="name" onChange={handleChange} />
          <input type="tel" placeholder="Phone Number" name="phone" onChange={handleChange} />
          <input type="email" placeholder="Email Address" name="email" onChange={handleChange} />
          <input type="text" placeholder="Treatment" name="treatment" onChange={handleChange} />
          <input type="text" placeholder="Location" name="location" onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="image-part">
        <img
          src="https://img.freepik.com/free-photo/young-naked-woman-sitting-floor-body-skin-care-concept_144627-19367.jpg"
          alt="Lady"
          style={imageStyle}
        />
      </div>
    </div>
  );
};

const imageStyle = {
  width: '100%',
  maxWidth: '350px',
};

export default DetailsForm;
