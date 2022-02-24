import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";


const TabsContent = ({ data}) => {
  return (
    <div return div className="assets-list flex flex-row flex-wrap gap-3">
      {data.map((item,idx) => (
        <div key={idx+ "-tab-content-" + item.title} className="asset flex flex-row items-center justify-center bg-white rounded-xl p-3">
          <div className="asset-info flex flex-row justify-center items-center">
            <img src={item.src} alt="" />
            <div className="asset-info__text w-32 ml-2">
              <p className="font-medium">{item.title}</p>
              <h2 className="text-gray">${item.price}</h2>
            </div>
          </div>
          <div className="asset-trend flex flex-row items-center justify-center">
            <FontAwesomeIcon icon={faArrowTrendUp} className="mr-2" />
            <p>{item.percent}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabsContent;
