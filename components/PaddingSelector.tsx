import React from "react";

import { Button } from "./ui/button";

interface PaddingSelectorProps {
  paddings: string[];
  currentPadding: string;
  setPadding: (newPadding: string) => void;
}

export default function PaddingSelector({
  paddings,
  currentPadding,
  setPadding,
}: PaddingSelectorProps) {
  const changePadding = (newPadding: string) => {
    setPadding(newPadding);
  };

  return (
    <>
      <div className="flex flex-col">
      <p className="py-1 text-slate-300">Select Padding: </p>

      <div className="flex gap-6">
        {paddings.map((padding, idx) => {
          return (
            <Button
              key={idx}
              onClick={() => changePadding(padding)}
              className={`h-[37px]  flex items-center justify-center text-sm px-2 cursor-pointer
                ${
                  currentPadding === padding &&
                  "bg-[#3C3C3C] text-white rounded-md"
                } hover:text-white ease-linear transition-all duration-300
              `}
            >
              {padding}
            </Button>
          );
        })}
      </div>
      </div>
    </>
  );
}
