import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import assured from "./../../../static/assured.svg";

export default function Assured() {
  return (
    <section className="assured w-full pt-[80px]">
      <div className="container flex flex-col-reverse lg:flex-row items-center justify-center">
        <div className="md:w-10/12 lg:w-6/12 flex flex-col ">
          <h2 className="lg:w-[400px] mb-8 font-medium leading-10 text-4xl">
            Rest assured, you’re in good hands
          </h2>
          <ul className="flex flex-col justify-start">
            <li className="flex flex-row justify-start items-center mb-6">
              <FontAwesomeIcon icon={faCheck} className="check-icon mr-2" />
              Assigned ownership of your coins
            </li>

            <li className="flex flex-row justify-start items-center mb-6">
              <FontAwesomeIcon icon={faCheck} className="check-icon mr-2" />
              Cutting edge security
            </li>

            <li className="flex flex-row justify-start items-center mb-6">
              <FontAwesomeIcon icon={faCheck} className="check-icon mr-2" />
              Digital assets backed by real world assets ²
            </li>

            <li className="flex flex-row justify-start items-center mb-6">
              <FontAwesomeIcon icon={faCheck} className="check-icon mr-2" />
              Crime prevention and good-faith policy ³
            </li>
          </ul>
        </div>
        <div className="lg:w-6/12 flex justify-end mb-8 lg:mb-0">
          <img src={assured} className="" />
        </div>
      </div>
    </section>
  );
}
