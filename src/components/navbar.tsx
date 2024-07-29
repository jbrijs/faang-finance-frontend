import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import React from "react";
import { ModeToggle } from "./mode-toggle";

const companies = [
  "Adobe",
  "Amazon",
  "Apple",
  "Google",
  "Meta",
  "Microsoft",
  "Netflix",
  "Nvidia",
];

function navbar() {
  return (
    <Menubar className="rounded-none border-x-0 h-14">
      <div className="flex flex-row justify-between w-full mx-10">
        <div className="flex flex-row gap-10">
          <MenubarMenu>
            <MenubarTrigger className="text-md">Predictions</MenubarTrigger>
            <MenubarContent>
              {companies.map((company) => (
                <MenubarItem key={company}>{company}</MenubarItem>
              ))}
              <MenubarSeparator/>
              <MenubarItem>
                All Companies
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-md">
              Project Description
            </MenubarTrigger>
            <MenubarContent>
            {companies.map((company) => (
                <MenubarItem key={company}>{company}</MenubarItem>
              ))}
              <MenubarSeparator/>
              <MenubarItem>
                All Companies
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-md">Historical Data</MenubarTrigger>
            <MenubarContent>
            {companies.map((company) => (
                <MenubarItem key={company}>{company}</MenubarItem>
              ))}
              <MenubarSeparator/>
              <MenubarItem>
                All Companies
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </div>
        <ModeToggle />
      </div>
    </Menubar>
  );
}

export default navbar;
