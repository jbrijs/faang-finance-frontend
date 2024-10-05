import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ModeToggle } from "./mode-toggle";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { HamIcon, Menu } from "lucide-react";

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
    <Menubar className="flex rounded-none border-x-0 h-14 items-center justify-start">
      <div className="md:flex flex-row justify-between w-full mx-8 hidden">
        <div className="flex flex-row items-center md:gap-10 gap-4">
          <p className="font-bold text-3xl text-nowrap">FAANG Finance</p>
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
                <MenubarItem
                  key={company}
                  onClick={() => navigate(`/data/${companies.get(company)}`)}
                >
                  {company}
                </MenubarItem>
              ))}
            </MenubarContent>
          </MenubarMenu>
          <p
            className="font-medium hover:cursor-default rounded px-2.5 py-1.5 active:bg-muted transition-all duration-200 ease-out"
            onClick={handleProjectDescriptionClick}
          >
            Case Study
          </p>
        </div>
        <ModeToggle />
      </div>
      <div className="flex md:hidden flex-row items-center justify-between mx-2 w-full">
        <Sheet>
          <SheetTrigger>
            <Button variant={"ghost"}>
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>FAANG Finance</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col items-start gap-10 z-10 pt-10">
              <p
                className="font-medium hover:cursor-default rounded py-1.5 active:bg-muted transition-all duration-200 ease-out"
                onClick={() => navigate("/")}
              >
                Predictions
              </p>

              <p
                className="font-medium hover:cursor-default rounded py-1.5 active:bg-muted transition-all duration-200 ease-out"
                onClick={handleProjectDescriptionClick}
              >
                Case Study
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Prediction Data</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-2">
                    {Array.from(companies.keys()).map((company) => (
                      <p
                        className="text-base pl-1.5"
                        key={company}
                        onClick={() =>
                          navigate(`/data/${companies.get(company)}`)
                        }
                      >
                        {company}
                      </p>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </SheetContent>
        </Sheet>
        <p className="font-bold text-3xl text-nowrap">FAANG Finance</p>
        <ModeToggle />
      </div>
    </Menubar>
  );
}

export default navbar;
