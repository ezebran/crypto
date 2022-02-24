import React from "react";

const TabsTitle = ({ data, activeItem, handleActiveItem }) => {
  const handleClick = (event) => {
    const value = event.target;
    if (value) {
      const idx = value.id.split("-tab-title-")[0]
      //function defined in parent
      handleActiveItem(idx);
    }
  };
  return (
    <ul className="asset-filter__nav flex flex-row justify-center items-center gap-7 mb-6">
      {data.map((item, idx) => (
        <li key={idx + "-tab-title-" + item}>
          <a
            id={idx + "-tab-title-" + item}
            onClick={handleClick}
            className={`text-gray cursor-pointer ${
              idx == activeItem.idx ? "active-item" : ""
            } `}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default TabsTitle;
