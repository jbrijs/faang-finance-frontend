import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { ModeToggle } from "./mode-toggle";
import { useNavigate } from "react-router-dom";

const companies = new Map([
  ["Adobe", "ADBE"],
  ["Amazon", "AMZN"],
  ["Apple", "AAPL"],
  ["Google", "GOOG"],
  ["Meta", "META"],
  ["Microsoft", "MSFT"],
  ["Netflix", "NFLX"],
  ["Nvidia", "NVDA"],
]);


function navbar() {
  const navigate = useNavigate();

  const handleProjectDescriptionClick = () => {
    navigate("/project-description");
  };
  return (
    <Menubar className="rounded-none border-x-0 h-14">
      <div className="flex flex-row justify-between w-full mx-10">
        <div className="flex flex-row items-center gap-10">
          <p className="font-bold text-3xl ">FAANG Finance</p>
          <p
            className="font-medium hover:cursor-default rounded px-2.5 py-1.5 active:bg-muted transition-all duration-200 ease-out"
            onClick={() => navigate("/")}
          >
            Predictions
          </p>

          <MenubarMenu>
            <MenubarTrigger className="text-md">Historical Data</MenubarTrigger>
            <MenubarContent>
              {Array.from(companies.keys()).map((company) => (
                <MenubarItem key={company} onClick={() => navigate(`/data/${companies.get(company)}`)}>{company}</MenubarItem>
              ))}
            </MenubarContent>
          </MenubarMenu>
          <p
            className="font-medium hover:cursor-default rounded px-2.5 py-1.5 active:bg-muted transition-all duration-200 ease-out"
            onClick={handleProjectDescriptionClick}
          >
            Project Description
          </p>
        </div>
        <ModeToggle />
      </div>
    </Menubar>
  );
}

export default navbar;
