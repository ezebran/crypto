import React, { useState } from "react";
import TabsTitles from "./TabsTitles"
import TabsContent from "./TabsContent";

const Tabs = ({ data }) => {

  const [activeItem, setActiveItem] = useState({idx: 0, item: data.length >= 1 ? data[0] : {}});
  const titles = data.map(item => item.title)
  const handleActiveItem = (idx) => {
     setActiveItem({idx, item: data[idx]})
  }
  return (
    <>
      <TabsTitles
        activeItem={activeItem}
        data={titles}
        handleActiveItem={handleActiveItem}
      />
      <TabsContent data={activeItem.item.data} />
    </>
  );
};

export default Tabs;
