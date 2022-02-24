import deposit from "./../../../static/deposit.svg";
import createAccount from "./../../../static/create-account.svg";
import startTrading from "./../../../static/start-trading.svg";

export default function Ready() {
  return (
    <section className="ready w-full flex flex-col  items-center pt-[80px] lg:w-[982px] mx-auto">
      <div className="container">
        <div className="flex flex-col justify-center items-center mb-8">
          <h2 className="font-medium mb-6 text-4xl">Ready, set, trade</h2>
          <p>Setup an account and start trading in less than 5 minutes.</p>
        </div>

        <div className="flex flex-col lg:flex-row w-full justify-between items-center">
          <div className="mb-8 lg:mb-0 md:w-7/12 lg:w-[306px] flex lg:flex-col justify-center items-center">
            <img src={createAccount} />
            <div className="ml-6">
              <h5 className="font-medium mt-6 lg:text-center">Create an account</h5>
              <p className="lg:text-center">
                Download the Structure Mobile App and create your account.
              </p>
            </div>
          </div>

          <div className="mb-8 lg:mb-0 md:w-7/12 lg:w-[306px] flex lg:flex-col justify-center items-center">
            <img src={deposit} />
            <div className="ml-6">
              <h5 className="font-medium mt-6 lg:text-center">Deposit crypto</h5>
              <p className="lg:text-center">
                Deposit crypto to your Structure Mobile App.
              </p>
            </div>
          </div>

          <div className="md:w-7/12 lg:w-[306px] flex lg:flex-col justify-center items-center">
            <img src={startTrading} />
            <div className="ml-6">
              <h5 className="font-medium mt-6 lg:text-center">Start trading</h5>
              <p className="lg:text-center">
                You’re ready to start trading crypto and stocks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
