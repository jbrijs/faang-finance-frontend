import { PredictionDataResponse } from "@/services/model";
import { Service } from "@/services/services";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataChart from "./DataChart";
import { tickerToCompanyName } from "@/utils";

const DataPage = () => {
  const { ticker } = useParams();
  // const [data, setData] = useState<PredictionDataResponse[] | null>()

  // useEffect(() => {
  //   const getPredictionData = async () => {
  //     if (ticker) {
  //       const response = await Service.getPredictionData(ticker);
  //       setData(response);
  //       console.log(response)
  //     }
  //   };
  //   getPredictionData()
  // }, [ticker]);
  return (
    <div className="w-full px-10 py-10 h-full flex items-center justify-center">
      <DataChart
        ticker={ticker || "TCKR"}
        company={(ticker && tickerToCompanyName(ticker)) || "Company Inc."}
      />
    </div>
  );
};

export default DataPage;
