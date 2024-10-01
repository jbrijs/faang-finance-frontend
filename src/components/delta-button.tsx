import { ArrowDown, ArrowUp } from "lucide-react";
import { formatMoney, formatPercentage } from "@/utils";

interface Props {
  trendingUp: boolean;
  percentView: boolean;
  prediction: number;
  prevClose: number;
}

const DeltaButton: React.FC<Props> = ({ trendingUp, percentView, prediction, prevClose }) => {
    const delta = Math.abs(prediction - prevClose);
    const deltaPercent = delta / prevClose;
  
    return (
      <p
        className={`text-sm flex flex-row gap-1.5 items-center justify-center  ${
          trendingUp ? "text-green-600" : "text-red-600"
        }`}
      >
        {trendingUp ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
        {percentView ? formatMoney(delta) : formatPercentage(deltaPercent)}
      </p>
    );
  };
  
  export default DeltaButton;
  