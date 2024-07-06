import React, { useState } from 'react';

const CreateDevicePage = ({ addItem }) => {
  const [formState, setFormState] = useState({ name: '', location: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(formState);
    setFormState({ name: '', location: '' });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Device</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Device Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formState.location}
            onChange={handleChange}
            placeholder="Location"
            required
            className="border rounded p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Device
        </button>
      </form>
    </div>
  );
};

export default CreateDevicePage;
