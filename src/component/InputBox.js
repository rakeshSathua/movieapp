import React from 'react';

function InputBox() {
    let [searchText, setSearchText] = React.useState("");
    let [numberOfItems, setNumberOfItems] = React.useState(0);
    const handleText = (e) => {
        setSearchText(e.target.value);
    }
    const handleCount = (e) => {
        setNumberOfItems(e.target.value);
    }
    
  return (
    <>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 px-4 rounded">NEW </button>
        <input type="text"></input>
        <input type="number"></input>
        
    </>

  );
}

export default InputBox;