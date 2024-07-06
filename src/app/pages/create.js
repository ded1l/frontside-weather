import React, { useState } from 'react';
import CreateDevicePage from '../components/CreateDevicePage';
import CrudForm from '../components/CrudForm';
import CrudList from '../components/CrudList';


const Create = () => {
  const [devices, setDevices] = useState([]);
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

  const addDevice = (device) => {
    setDevices([...devices, { ...device, id: Date.now() }]);
  };

  return (
    <div>
          <div className="p-4">
        <CrudForm addItem={addItem} updateItem={updateItem} selectedItem={selectedItem} />
        <CrudList items={items} deleteItem={deleteItem} selectItem={selectItem} />
      </div>
      <CreateDevicePage addItem={addDevice} />
      {}
      <ul>
        {devices.map((device) => (
          <li key={device.id}>
            {device.name} - {device.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Create;
