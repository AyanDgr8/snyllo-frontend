// src/components/routes/DetailsForm.js

import React, { useState, useEffect } from 'react';
import './DetailsForm.css';

const DetailsForm = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: '',
    location: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const apiUrl = 'https://snyllo-backend.onrender.com/user-details/';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data) {
        console.error('Error submitting form:', data);
        setSubmissionStatus('error');
      } else {
        console.log('Submission successful:', data);
        setSubmissionStatus('success');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
    }
  };

  useEffect(() => {
    if (submissionStatus) {
      // Reset the form after 2 seconds
      const resetForm = setTimeout(() => {
        setSubmissionStatus(null);
        setFormData({
          name: '',
          phone: '',
          email: '',
          treatment: '',
          location: '',
        });
      }, 2000);

      return () => clearTimeout(resetForm);
    }
  }, [submissionStatus]);

  return (
    <div className="container">
      <div className="image-part">
        <img
          src="https://img.freepik.com/free-photo/young-naked-woman-sitting-floor-body-skin-care-concept_144627-19367.jpg"
          alt="Lady"
        />
      </div>
      <div className="form-part">
        <form id="form-section" onSubmit={handleSubmit}>
          <h1 className="head">Our Experts Have All The Answers For You</h1>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Treatment"
            name="treatment"
            value={formData.treatment}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        {submissionStatus && (
          <p className={submissionStatus === 'success' ? 'success-message' : 'error-message'}>
            {submissionStatus === 'success' ? 'Your details are received!' : 'Error submitting form. Please try again.'}
          </p>
        )}
      </div>
    </div>
  );
};


export default DetailsForm;
