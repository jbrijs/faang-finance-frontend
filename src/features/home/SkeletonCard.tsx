import { Skeleton } from "@/components/ui/skeleton";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "../../components/ui/card";

const SkeletonCard = () => {
  return (
    <Card className="sm:col-span-1 sm:row-span-1 w-full">
      <CardHeader className="w-full">
        <CardTitle className="w-full flex flex-row items-center justify-between">
            <Skeleton className="w-20 h-10 rounded"></Skeleton>
            <Skeleton className="w-10 h-6 rounded"></Skeleton>
        </CardTitle>

        <CardDescription>
          <Skeleton className="w-full h-10 rounded"/>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col h-36 w-full justify-end">
        <Skeleton className="h-20 w-40 rounded"/>
      </CardContent>
    </Card>
  );
};

export default SkeletonCard;
