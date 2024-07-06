"use client";

import { useState, useEffect } from 'react';

const CrudForm = ({ addItem, updateItem, selectedItem }) => {
  const [formState, setFormState] = useState({ name: '', color: '', category: '', price: '' });

  useEffect(() => {
    if (selectedItem) {
      setFormState(selectedItem);
    } else {
      setFormState({ name: '', color: '', category: '', price: '' });
    }
  }, [selectedItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedItem) {
      updateItem(formState);
    } else {
      addItem(formState);
    }
    setFormState({ name: '', color: '', category: '', price: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        name="name"
        value={formState.name}
        onChange={handleChange}
        placeholder="Name"
        required
        className="border rounded p-2 mb-2"
      />
      <input
        type="text"
        name="color"
        value={formState.color}
        onChange={handleChange}
        placeholder="Color"
        required
        className="border rounded p-2 mb-2"
      />
      <input
        type="text"
        name="category"
        value={formState.category}
        onChange={handleChange}
        placeholder="Category"
        required
        className="border rounded p-2 mb-2"
      />
      <input
        type="text"
        name="price"
        value={formState.price}
        onChange={handleChange}
        placeholder="Price"
        required
        className="border rounded p-2 mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {selectedItem ? 'Update' : 'Add'} Item
      </button>
    </form>
  );
};

export default CrudForm;
