import { PredictionDataResponse } from "@/services/model";
import { Service } from "@/services/services";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DataPage = () => {
  const { ticker } = useParams();
  const [data, setData] = useState<PredictionDataResponse[] | null>()

  useEffect(() => {
    const getPredictionData = async () => {
      if (ticker) {
        const response = await Service.getPredictionData(ticker);
        setData(response);
        console.log(response)
      }
    };
    getPredictionData()
  }, [ticker]);
  return <div>{ticker}</div>;
};

export default DataPage;
