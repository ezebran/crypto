import Tabs from "../../../components/Tabs";
import {fakeTabsDataService} from "../../../services"
export default function Assets() {
  const tabsData = fakeTabsDataService()
  return (
    <section className="all-assets w-full flex flex-col lg:flex-row pt-[60px]">
      <div className="container flex flex-col lg:flex-row">
        <div className="flex flex-col items-start w-full lg:w-7/12">
          <Tabs data={tabsData} />
        </div>

        <div className="md:w-8/12 mt-12 lg:mt-0 md:mx-auto lg:w-5/12 flex flex-col justify-center items-start">
          <h1 className="font-medium">
            All of your assets, now in one place
          </h1>
          <p className="mb-7 mt-5">
            Deposit crypto to the Structure Mobile App and buy stocks, crypto, and
            other assets in seconds.
          </p>
          <button className="btn btn-regular w-full lg:w-auto">Browse all assets</button>
        </div>
      </div>
    </section>
  );
}
