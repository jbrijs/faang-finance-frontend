import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DataChart from "./DataChart";
import { tickerToCompanyName } from "@/utils";
import { useAppDispatch } from "@/app/hooks";
import { fetchPredictionData } from "./thunk";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { setTicker } from "./dataSlice";

const DataPage = () => {
  const { paramTicker } = useParams();
  // console.log('paramTicker from useParams:', paramTicker); // Add this log
  
  const dispatch = useAppDispatch();
  
  const { data, ticker, loading, error } = useSelector(
    (state: RootState) => state.dataPage
  );
  // console.log('Current ticker from Redux:', ticker); // Add this log

  useEffect(() => {
    if (paramTicker) {
      // console.log('Dispatching setTicker with paramTicker:', paramTicker); // Add this log
      dispatch(setTicker(paramTicker));
    }
  }, [paramTicker, dispatch]);

  useEffect(() => {
    if (ticker) {
      // console.log('Ticker exists, dispatching fetchPredictionData:', ticker); // Add this log
      dispatch(fetchPredictionData());
    }
  }, [ticker, dispatch]);

  return (
    <div className="w-screen md:p-10 px-2 pt-10 h-full flex items-center justify-center">
      <DataChart
        ticker={ticker || "TCKR"}
        company={(ticker && tickerToCompanyName(ticker)) || "Company Inc."}
        data={data}
        loading={loading}
        error={error}
      />
    </div>
  );
};


export default DataPage;
