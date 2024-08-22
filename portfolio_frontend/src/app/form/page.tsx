"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

const NewPage = () => {
  // State to manage input fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [profession, setProfession] = useState('');

  // State to manage form submission feedback
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage('');
  
    const formData = {
      name,
      email,
      location,
      profession,
    };
  
    try {
      const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]')?.value;
  
      const response = await fetch('http://127.0.0.1:8000/api/save_profile/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken || '',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        setMessage('Form submitted successfully!');
        setName('');
        setEmail('');
        setLocation('');
        setProfession('');
      } else {
        setMessage(`Error: ${response.statusText}`);
      }
    } catch (error) {
      // setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-10'>
      <div className="flex justify-end p-4">
        <Navbar />
      </div>
      <br />
      <div className="container mx-auto px-4">
        <h1 className='flex justify-center'>Welcome to the Form page!</h1>
 
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Form fields here */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium">
              Location:
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="profession" className="block text-sm font-medium">
              Profession:
            </label>
            <input
              type="text"
              id="profession"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
              disabled={loading}  // Disable button while loading
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
        {message && (
          <div className="mt-4 p-2 bg-blue-200 text-blue-800 rounded">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewPage;
