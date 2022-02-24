import rectangle from "./../../../static/rectangle.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function BuyStock() {
  return (
    <section className="buy-stock w-full pt-[80px]">
      <div className="container flex flex-row">
        <div className="buy-stock__info flex flex-col justify-center w-full lg:w-6/12 items-start">
          <h1 className="font-medium">Buy stocks with crypto</h1>
          <p className="mt-[20px] mb-[60px]">
            No market closes. No trading fees. All the stocks and <br /> crypto
            coins you love.
          </p>

          <h3 className="mb-[15px]">Ready to start trading?</h3>

          <form className="number-info-form flex flex-col md:flex-row w-full">
            <div className="select-container relative text-lg w-full md:w-2/12 lg:w-auto">
              <select className="bg-gray-light p-4 pr-8 rounded-lg appearance-none focus:outline-none cursor-pointer w-full">
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
              className="md:ml-2 mt-2 md:mt-0 bg-gray-light p-4 pr-8 rounded-lg appearance-none focus:outline-none cursor-pointer placeholder:text-black w-full md:w-8/12 lg:w-auto"
              placeholder="Enter your phone number"
            />

            <button className="btn btn-regular mt-2 md:mt-0 md:ml-2 w-full md:w-2/12 lg:w-auto">
              Send link
            </button>
          </form>
        </div>
        <div className="buy-stock__image hidden w-6/12 lg:flex justify-center items-center">
          <img src={rectangle} className="rectangle" />
        </div>
      </div>
    </section>
  );
}
