import { useState } from "react";

import { languages } from "@/lib/utils";

import { Check, ChevronsUpDown } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 

interface LanguageSelectorProps {
  language: string;
  setCurrentLanguage: (language: string) => void;
  setLanguageIcon: (icon: string) => void;
}

export default function LanguageSelector({
  language,
  setCurrentLanguage,
  setLanguageIcon,
}: LanguageSelectorProps) {
  const handleLanguageChange = (newLanguage: string) => {
      setCurrentLanguage(newLanguage);
      console.log(newLanguage)
    const newActiveIcon = languages.find(
      (lang) => lang.value === newLanguage
    )?.icon;

    if (newActiveIcon) {
      setLanguageIcon(newActiveIcon);
    }
  };

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? languages.find((language) => language.value === value)?.label // change to label
            : "Select Language..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search language..." />
          <CommandEmpty>No Language found.</CommandEmpty>
          <CommandGroup>
            {languages.map((language) => (
              <CommandItem
                key={language.value}
                // onClick={() => handleLanguageChange(language.value)}
                value={language.value}
                onSelect={() => {
                  handleLanguageChange(language.value);
                  setValue(language.value);
                  setOpen(false);

                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === language.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {language.label}  {/*change to label*/}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
    </>
  )
}
