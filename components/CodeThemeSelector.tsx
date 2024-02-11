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
import { codeThemes } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface CodeThemeSelectorProps {
  codeTheme: string;
  setCodeTheme: (theme: string) => void;
}

export function CodeThemeSelector({
  codeTheme,
  setCodeTheme,
}: CodeThemeSelectorProps) {
  const handleCodeThemeChange = (newTheme: string) => {
    setCodeTheme(newTheme);
  };

  return (
    <div className="flex flex-col">
     <p className="py-1 text-slate-300">Theme </p>
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-gray-900 text-white hover:bg-gray-800 hover:text-white" asChild>
        <Button variant="outline" className="flex items-center text-white">
          Code theme
          <ChevronDown className="ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-gray-900">
        <DropdownMenuLabel className="text-white">Code Themes</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={codeTheme} onValueChange={handleCodeThemeChange}>
          {codeThemes.map((theme, i) => (
        <DropdownMenuRadioItem key={i} value={theme} className="font-medium text-white focus:text-white focus:bg-gray-800">
              {theme}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  );
}

  export default CodeThemeSelector;
  