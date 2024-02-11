import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { backgrounds } from "@/lib/utils";
import { ChevronDown } from "lucide-react";


interface BackgroundSelectorProps {
  background: string;
  setBackground: (background: string) => void;
}

export function BackgroundSelector({
  background,
  setBackground,
}: BackgroundSelectorProps) {
  const handleBackgroundChange = (newBackground: string) => {
    setBackground(newBackground);
  };

  return (
    <div className="flex flex-col">
      <p className="py-1 text-slate-300">Background</p>
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-gray-900 hover:bg-gray-800 hover:text-white" asChild>
          <Button variant="outline" className="flex items-center text-white">
            Background
            <ChevronDown className="ml-1" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-gray-900">
          <DropdownMenuLabel className="text-white">Backgrounds</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={background} onValueChange={handleBackgroundChange}>
            {backgrounds.map((bg, i) => (
              <DropdownMenuRadioItem key={i} value={bg.color} className="focus:bg-gray-800 text-white">
                <div
                  className="w-8 h-8 rounded-full"
                  style={{ background: bg.color }}
                ></div> 
                <span className="ml-2 font-medium text-white">{bg.name}</span>
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default BackgroundSelector;
