import React, { useState } from "react";
import './Design.css';

const Toolbar = ({ pageSize, selectedSize, handleSelect, handleConfirmSize, handleReset,pageBg,setPageBg,selectColor,data,setData }) => {
    const [ helpToggle , setHelpToggle ] = useState(false)
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
  return (
    <>
    <div style={{marginBottom : 12}}>
      <h1>Design Trove</h1>
      <a 
        href="https://www.linkedin.com/in/dhanush-k-s-07a635284" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        LinkedIn
      </a><br/>
      <button onClick={() => setHelpToggle(!helpToggle)} style={{backgroundColor : 'skyblue',borderRadius : 12,width : 120,height : 30,border : 'none'}}>How to use</button>
    </div>
    {helpToggle == false?
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
    </div>:<div style={{paddingLeft : '20%',marginRight : '20%'}}>
      <h1>How to Use Design Trove</h1>
      <p style={{textAlign : 'left',border : '1px solid black',padding : 10,borderRadius :12,backgroundColor : "#FDFD96",lineHeight : 1.5}}>First, you have to select the page size and background color. Then, choose a JSON file, which serves as a reference to the original JSON you will enter later after saving. Once that's done, click Confirm Size. If you press Reset, the page will return to its initial state.

After confirming the size, the sheet and editing tools will appear, along with the reference JSON displayed at the top-left corner. This is a drag-and-drop editor. The available tools include Image (to insert images), Table, Box, etc. The Value tool allows you to bind dynamic data by dragging values from the reference JSON onto the canvas.

Once you've designed your layout, you can verify the data binding using the Value tab in the second row, which shows variables from the JSON like data.name. After dropping elements onto the canvas, you can edit their properties by right-clicking on them. You can also resize elements using the resize handles.

Once your design is complete, click Save and Move, which will take you to the next page where you can upload your JSON files to test the dynamic behavior of the template.</p>
      </div>}
    </>
  );
};

export default Toolbar;
