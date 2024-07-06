"use client";

import { useState } from 'react';
import Navbar from "./components/Navbar";
import CrudForm from './components/CrudForm';
import CrudList from './components/CrudList';

const Home = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const addItem = (item) => {
    setItems([...items, { ...item, id: Date.now() }]);
  };

  const updateItem = (updatedItem) => {
    setItems(items.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
    setSelectedItem(null);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const selectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="container mx-auto p-4 mt-16">
          <CrudForm addItem={addItem} updateItem={updateItem} selectedItem={selectedItem} />
          <CrudList items={items} deleteItem={deleteItem} selectItem={selectItem} />
        </div>
      </main>
    </div>
  );
};

export default Home;
