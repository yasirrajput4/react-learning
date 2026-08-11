import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./components";
import { useState } from "react";

const App = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center items-center bg-linear-to-br from-blue-600 via-indigo-600 to-purple-700 p-4">
      <div className="w-full max-w-5xl mx-auto flex flex-wrap md:flex-nowrap items-center gap-6">
        {/* Left side - photo */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://picsum.photos/seed/currency-exchange/900/700"
            alt="Currency exchange"
            className="w-full h-105 object-cover rounded-2xl shadow-2xl border border-white/40"
          />
        </div>

        {/* Right side - card */}
        <div className="w-full md:w-1/2">
          <div className="w-full border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 shadow-xl">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisabled
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
