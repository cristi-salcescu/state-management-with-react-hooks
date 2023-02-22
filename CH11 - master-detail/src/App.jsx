import { useState } from "react";
import List from "./List";
import Details from "./DetailsEdit";

function editItem(list, newItem) {
  return list.map((item) => (item.id === newItem.id ? newItem : item));
}

const initialList = [
  { id: 1, name: "Radio" },
  { id: 2, name: "Headset" },
  { id: 3, name: "Keyboard" }
];

function App() {
  const [items, setItems] = useState(initialList);
  const [selectedItem, setSelectedItem] = useState(null);

  const updateItem = (newItem) => {
    setItems((list) => editItem(list, newItem));
    setSelectedItem(null);
  };

  return (
    <div>
      <List items={items} onClick={setSelectedItem} />
      {selectedItem && <Details item={selectedItem} onSave={updateItem} />}
    </div>
  );
}

export default App;
