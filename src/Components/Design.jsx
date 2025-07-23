import { useState, useEffect, useRef } from "react";
import Toolbar from "./Toolbar";
import Canvas from "./Canvas";
import "./Design.css";

const Design = () => {
  const [pageWidth, setPageWidth] = useState("");
  const [pageHeight, setPageHeight] = useState("");
  const [pageView, setPageView] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [droppedItems, setDroppedItems] = useState([]);
  const [data,setData]=useState()
  const [pageBg,setPageBg]=useState()
  const divRef = useRef(null);
  const pageSize = {
    A4: [210, 297],
    A3: [297, 420],
    A5: [148, 210],
    Letter: [216, 279],
    Legal: [216, 356],
    Tabloid: [279, 432],
    Executive: [184, 267],
    Folio: [210, 330],
    Ledger: [432, 279],
  };  

  useEffect(() => {
    const savedSize = localStorage.getItem("pageSize");
    if (savedSize) {
      const [width, height] = JSON.parse(savedSize);
      setPageWidth(width);
      setPageHeight(height);
      setPageView(true);
    }

    const savedItems = localStorage.getItem("droppedItems");
    if (savedItems) {
      setDroppedItems(JSON.parse(savedItems));
    }
  }, []);
  const handleSelect = (e) => {
    setSelectedSize(e.target.value);
  };
  
  const selectColor = (e) => {
    setPageBg(e.target.value)
  }

  const handleConfirmSize = () => {
    if (selectedSize && data) {
      const size = pageSize[selectedSize];
      setPageWidth(size[0]);
      setPageHeight(size[1]);
      setPageView(true);
      localStorage.setItem("pageSize", JSON.stringify(size));
      localStorage.setItem("pageColor", (pageBg));
      localStorage.setItem("data",JSON.stringify(data))
    } else if(selectedSize) {
      alert('select json')
    }
    else{
      alert('select page size')
    }
  };

  const handleReset = () => {
    localStorage.removeItem("pageSize");
    localStorage.removeItem("droppedItems");
    localStorage.removeItem("data");
    setPageWidth("");
    setPageHeight("");
    setSelectedSize("");
    setPageView(false);
    setDroppedItems([]);
  };


  return (
    <div id="fullbody" style={{ marginTop: 40 }}>
      <Toolbar
        pageSize={pageSize}
        selectedSize={selectedSize}
        handleSelect={handleSelect}
        handleConfirmSize={handleConfirmSize}
        handleReset={handleReset}
        selectColor={selectColor}
        pageBg={pageBg}
        setPageBg={setPageBg}
        data={data}
        setData={setData}
      />

      {pageView && (
        <Canvas
          pageWidth={pageWidth}
          pageHeight={pageHeight}
          droppedItems={droppedItems}
          setDroppedItems={setDroppedItems}
          divRef={divRef}
          pageBg={pageBg}
        />
      )}
    </div>
  );
};

export default Design;
