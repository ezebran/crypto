import React, { useEffect, useRef } from "react";

import rectangle from "./../../../static/rectangle.svg";
import bannerSm from "./../../../static/banner_bg-sm.svg";
import bannerMd from "./../../../static/banner_bg-md.svg";
import bannerLg from "./../../../static/banner_bg-lg.svg";

export default function Trade() {
  const banner = useRef(null);

  const hasWindow = typeof window !== "undefined";

  useEffect(() => {
    const deviceWidth = hasWindow ? window.innerWidth : null;

    const imgSet =
      deviceWidth < 400
        ? bannerSm
        : deviceWidth > 400 && deviceWidth < 768
        ? bannerMd
        : bannerLg;

    banner.current.style.backgroundImage = `url(${imgSet})`;
    banner.current.style.backgroundSize = `cover`;
  }, []);

  return (
    <section className="trade w-full flex flex-col items-center pt-[80px]">
      <div
        className="banner mb-20 px-8 flex flex-col md:flex-row md:justify-between items-center w-full h-[420px] md:w-[688px] md:h-[228px] lg:w-[982px] lg:h-[275px]"
        ref={banner}
      >
        <div className="banner__text text-center md:text-left flex flex-col items-start justify-center w-8/12 lg:w-[450px]">
          <h4 className="font-medium">
            Sign up and get no-fee trading for life
          </h4>
          <p>
            We’re giving our first 5,000 users lifetime access to totally free
            trading.
          </p>
        </div>

        <div className="banner__action flex flex-col justify-center items-center">
          <span className="text-md mt-6 md:mt-0">Spots left</span>
          <span className="text-4xl">2,631 </span>
          <button className="btn btn-regular mt-4 md:mt-0">
            Claim your spot
          </button>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row-reverse lg:flex-row lg:w-[982px] md:px-6 lg:px-0">
        <div className="md:w-6/12 flex flex-col justify-center items-start px-6 md:px-0">
          <h2 className="font-medium text-4xl mb-4 leading-10">
            Trade crypto and stocks
          </h2>
          <p className="mb-6">
            Have $200 in Bitcoin and want to purchase $100 of a Tesla stock? No
            problem, Structure makes this easy with the tap of a button.
          </p>
          <button className="btn btn-regular w-full sm:w-fit">
            Swap assets
          </button>
        </div>
        <div className="mb-8 md:mb-0 buy-stock__image md:w-6/12 flex items-center justify-center lg:justify-end">
          <img src={rectangle} className="rectangle" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse lg:flex-row lg:w-[982px] mt-12 md:mt-0 md:px-6 lg:px-0">
        <div className="mb-8 md:mb-0 buy-stock__image md:w-6/12 flex md:justify-end items-center justify-center lg:justify-start">
          <img src={rectangle} className="rectangle" />
        </div>
        <div className="md:w-6/12 flex flex-col justify-center items-start px-6 md:px-0">
          <h2 className="font-medium mb-4 text-4xl leading-10">
            No market closes
          </h2>
          <p className="mb-6">
            Trade stocks, crypto, and other assets on Structure 24/7.¹ Markets
            are always open, weekends and holidays included.
          </p>
          <button className="btn btn-regular w-full sm:w-fit">
            Get access now
          </button>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row-reverse lg:flex-row lg:w-[982px] mt-12 md:mt-0 md:px-6 lg:px-0">
        <div className="md:w-6/12 flex flex-col justify-center items-start px-6 md:px-0">
          <h2 className="font-medium mb-4 text-4xl leading-10">
            No trading pair limitations
          </h2>
          <p className="mb-6">
            Unlike Coinbase, Binance, and other crypto exchanges, any asset you
            own on Structure can be swapped with any crypto or stock we have
            available. Swap $1 or more of Bitcoin for your favorite new alt
            coin. Trade $1 or more of your Tesla stock for another stock or
            crypto coin.
          </p>
          <button className="btn btn-regular w-full sm:w-fit">
            Start trading
          </button>
        </div>
        <div className="mb-8 md:mb-0 buy-stock__image md:w-6/12 flex items-center justify-center lg:justify-end">
          <img src={rectangle} className="rectangle" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse lg:flex-row lg:w-[982px] mt-12 md:mt-0 md:px-6 lg:px-0">
        <div className="mb-8 md:mb-0 buy-stock__image md:w-6/12 flex justify-center md:justify-end lg:justify-start items-center ">
          <img src={rectangle} className="rectangle" />
        </div>
        <div className="md:w-6/12 flex flex-col justify-center items-start px-6 md:px-0">
          <h2 className="font-medium mb-4 text-4xl leading-10">
            A better way to send and receive payments
          </h2>
          <p className="mb-6">
            Send payments in the asset of your choice. On Structure, all assets
            work like money. <br /> <br />
            Received Bitcoin but really wanted Google stock? Accept payments in
            the asset of your choice.
          </p>
          <button className="btn btn-regular w-full sm:w-fit">
            Send a payment
          </button>
        </div>
      </div>
    </section>
  );
}
