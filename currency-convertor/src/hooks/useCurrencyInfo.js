import { useEffect, useState } from "react";
import axios from "axios";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchCurrencyInfo = async () => {
      try {
        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

        const res = await axios.get(url);

        const result = res.data;
        setData(result[currency]);
      } catch (error) {
        console.error("Error fetching currency info:", error);
      }
    };

    fetchCurrencyInfo();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
