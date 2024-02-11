// "use client";
// import React from "react";
// import { ChevronDown } from "lucide-react";
// import { backgrounds } from "@/lib/utils";
// // import OutsideClickHandler from "react-outside-click-handler";

// interface BackgroundSelectorProps {
//   background: string;
//   setBackground: (background: string) => void;
// }

// function BackgroundSelector({
//   background,
//   setBackground,
// }: BackgroundSelectorProps) {
//   const [showDropdown, setShowDropdown] = React.useState(false);
  

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const handleBackgroundChange = (newBackground: string) => {
//     setBackground(newBackground);
//   };

//   return (
//     // <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
//       <div className="bg-selector relative" onClick={toggleDropdown}>
//         <p className="py-[5px] text-sm font-medium text-gray-300">Theme Selector</p>
//         <div className="dropdown-title w-[62px] flex gap-2 bg-slate-800 py-2 px-1">
//           <div
//             className="rounded-full w-[20px] h-[20px] bg-gray-800"
//             style={{
//               background: background,
//             }}
//           ></div>
//           <ChevronDown />
//         </div>
//         {showDropdown && (
//           <div className="dropdown-menu top-[74px] w-[62px] rounded-full flex flex-col gap-2">
//             {backgrounds.map((bg, i) => {
//               return (
//                 <div
//                   key={i}
//                   onClick={() => handleBackgroundChange(bg)}
//                   className="w-[20px] h-[20px] rounded-full"
//                   style={{ background: bg }}
//                 ></div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     // </OutsideClickHandler>
//   );
// }

// export default BackgroundSelector;


// ... (imports)

// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
// } from "@/components/ui/command";
// import { ChevronDown } from "lucide-react";
// import { backgrounds } from "@/lib/utils";
// import React from "react";

// interface BackgroundSelectorProps {
//   background: string;
//   setBackground: (background: string) => void;
// }

// function BackgroundSelector({
//   background,
//   setBackground,
// }: BackgroundSelectorProps) {
//   const [open, setOpen] = React.useState(false);
//   const [value, setValue] = React.useState("");

//   const toggleDropdown = () => {
//     setOpen(!open);
//   };

//   const handleBackgroundChange = (newBackground: string) => {
//     setBackground(newBackground);
//   };

//   return (
//     <>
//       <Popover open={open} onOpenChange={setOpen}>
//         <PopoverTrigger asChild>
//           <div
//             className="bg-selector relative"
//             onClick={toggleDropdown}
//           >
//             <p className="py-[5px] text-sm font-medium text-gray-300">Theme Selector</p>
//             <div className="dropdown-title w-[62px] flex gap-2 bg-slate-800 py-2 px-1">
//               <div
//                 className="rounded-full w-[20px] h-[20px] bg-gray-800"
//                 style={{
//                   background: background,
//                 }}
//               ></div>
//               <ChevronDown />
//             </div>
//           </div>
//         </PopoverTrigger>
//         <PopoverContent className="w-[62px] p-0">
//           <Command>
//             <CommandGroup>
//               {backgrounds.map((bg, i) => (
//                 <CommandItem
//                   key={i}
//                   value={bg}
//                   onSelect={() => {
//                     setValue(bg);
//                     setOpen(false);
//                     handleBackgroundChange(bg);
//                   }}
//                 >
//                   <div
//                     className="w-[20px] h-[20px] rounded-full"
//                     style={{ background: bg }}
//                   ></div>
//                 </CommandItem>
//               ))}
//             </CommandGroup>
//           </Command>
//         </PopoverContent>
//       </Popover>
//     </>
//   );
// }

// export default BackgroundSelector;

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