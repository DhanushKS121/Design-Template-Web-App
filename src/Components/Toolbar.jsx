import React from "react";
import './Design.css';

const Toolbar = ({ pageSize, selectedSize, handleSelect, handleConfirmSize, handleReset,pageBg,setPageBg,selectColor,data,setData }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target.result); // Parse JSON data
          setData(jsonData); // Store in state
        } catch (error) {
          console.error("Invalid JSON file:", error);
        }
      };

      reader.readAsText(file); // Read file as text
    }
  }
  console.log('tool',data)
  return (
    <div id="pageSizeInput">
      <select onChange={handleSelect} value={selectedSize}>
        <option value="" disabled>
          Select Page Size
        </option>
        {Object.keys(pageSize).map((key) => (
          <option key={key} value={key}>
            {key}: {pageSize[key][0]} x {pageSize[key][1]} mm
          </option>
        ))}
      </select><br/>
      <label htmlFor="">Select background color</label>
      <input type="color" onChange={selectColor}/>
      <input type="file" onChange={handleFileChange}  accept=".json"/>
      <button className="btn" style={{backgroundColor:'purple'}} onClick={handleConfirmSize}>Confirm Size</button>
      <button className="btn" style={{backgroundColor:'red'}}  onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Toolbar;
