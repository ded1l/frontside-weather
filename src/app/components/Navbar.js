import React, { useState } from 'react';
import { useRouter } from 'next/router';
import CrudForm from './CrudForm';
import CrudList from './CrudList';

const Navbar = () => {

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
    <nav className="fixed top-0 w-full bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src="/chartlogo.png" alt="A server surrounded by magic sparkles." />
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-1xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
              <button onClick={() => router.push('/create')} className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Add Devices
              </button>
            </li>
          </ul>
        </div>
      </div>
    
    </nav>
  );
}

export default Navbar;
