import React, { useState, useEffect} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import conectionLg from "./../../../static/connecting_lg.jpg";
import conectionMd from "./../../../static/connecting_md.jpg";
import conectionSm from "./../../../static/connecting_sm.jpg";
import iphone from "./../../../static/iphone-13.png";
import iphoneSm from "./../../../static/iphone-13-sm.png";

export default function Conection() {

  const [imgSrc, setImgSrc] = useState(conectionLg);

  const [iphoneSrc, setiphoneSrc] = useState(iphone);

  const hasWindow = typeof window !== "undefined";
  const deviceWidth = hasWindow ? window.innerWidth : null;

  useEffect(() => {
    const imgSet =
      deviceWidth < 540 ? conectionSm :
      deviceWidth > 540 && deviceWidth < 1100 ? conectionMd :
      conectionLg;
    setImgSrc(imgSet);

    const iphoneSet =
      deviceWidth < 540 ? iphoneSm : iphone;
      setiphoneSrc(iphoneSet);
  }, []);

  return (
    <section className="trade w-full flex flex-col items-center pt-[80px] ">
      <div className="flex flex-col lg:flex-row w-full mb-12 md:mb-0 conection-container">
        <div className="buy-stock__image mb-8 lg:mb-0 w-full lg:w-6/12 flex justify-start items-center">
          <img src={imgSrc} className="w-full sm:w-fit" />
        </div>
        <div className="lg:w-6/12 flex flex-col justify-center items-start px-6 lg:px-0">
          <h2 className="font-medium mb-4 text-4xl leading-10">Connecting the world of assets</h2>
          <p className="mb-6">
            Structure was created to give people around the world access to the
            same investment assets. We’re on a mission to empower investors of
            all types through secure and easy-to-use financial tools. <br />{" "}
            <br /> Interested in helping us build the future of finance?
            Checkout our careers page to get started.
          </p>
          <button className="btn btn-regular w-full md:w-auto">View open positions</button>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row-reverse lg:flex-row w-full conection-container">
        <div className="buy-stock__info flex flex-col justify-center md:w-6/12 items-start px-6 lg:px-0">
          <h2 className="font-medium mb-6 leading-10 text-4xl">Sign up today and get no-fee trading for life.</h2>
          <p className="mb-14">
            No market closes. No trading fees. All the stocks and <br /> crypto
            coins you love.
          </p>

          <h3 className="mb-4">Ready to start trading?</h3>

          <form className="number-info-form flex flex-row flex-wrap">
            <div className="select-container relative text-lg md:w-3/12 lg:w-auto w-full mb-2 md:mb-0">
              <select className="w-full md:w-auto bg-gray-light p-4 pr-8 rounded-lg appearance-none focus:outline-none cursor-pointer">
                <option value="1">US+4</option>
                <option value="2">AR+2</option>
              </select>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="absolute top-5 right-2.5 "
              />
            </div>

            <input
              type="text"
              className="lg:ml-2 bg-gray-light p-4 pr-8 rounded-lg appearance-none focus:outline-none cursor-pointer placeholder:text-black w-full md:w-9/12 lg:w-auto"
              placeholder="Enter your phone number"
            />

            <button className="btn btn-regular ml-2 w-full lg:w-auto mt-4 lg:mt-0">Send link</button>
          </form>
        </div>
        <div className="buy-stock__image md:w-6/12 flex lg:justify-center items-center">
          <img src={iphoneSrc} className="w-full md:w-auto" />
        </div>
      </div>
    </section>
  );
}
