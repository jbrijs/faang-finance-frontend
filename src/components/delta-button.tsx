import ArrowUpward from "@mui/icons-material/ArrowUpward";
import { ArrowDown } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { formatMoney, formatPercentage } from "@/utils";

interface Props {
  trendingUp: boolean;
  percentView: boolean;
  prediction: number;
  prevClose: number;
}

const DeltaButton: React.FC<Props> = ({ trendingUp, percentView, prediction, prevClose }) => {
  const [view, setView] = useState({ view: percentView });

  const handleClick = () => {
    setView((prev) => ({ view: prev.view }));
  };

  const delta = Math.abs(prediction - prevClose)
  const deltaPercent = (delta / prevClose) * 100

  return (
    <Button
    variant={'ghost'}
      onClick={() => handleClick}
      className={`flex flex-row gap-1.5 items-center justify-center hover:bg-secondary ${
        trendingUp ? "text-green-600" : "text-red-600"
      }`}
    >
      {trendingUp ? <ArrowUpward className="h-4 w-4" /> : <ArrowDown className="h-4 w-4"/>}
      {view ? formatPercentage(deltaPercent) : formatMoney(delta)}
    </Button>
  );
};

export default DeltaButton;
