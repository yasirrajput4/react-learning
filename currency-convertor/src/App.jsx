import useCurrencyInfo from "./hooks/useCurrencyInfo";
const App = () => {
  const currencyInfo = useCurrencyInfo("usd");
  return <div>App</div>;
};
export default App;
