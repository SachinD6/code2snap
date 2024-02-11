"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CodeEditor from "@/components/CodeEditor";
import PaddingSelector from "@/components/PaddingSelector";
import { useRef, useState, useCallback } from "react";
import LanguageSelector from "@/components/LanguageSelector";
import BackgroundSelector from "@/components/BackgroundSelector";
import CodeThemeSelector from "@/components/CodeThemeSelector";
import { backgrounds, downloadScreenShot, languages } from "@/lib/utils";
import { Download } from "lucide-react";
import Footer from "@/components/Footer";

// import { toPng } from 'html-to-image';
import html2canvas from "html2canvas";

export default function Home() {
  const editorRef = useRef(null);
  const [paddings, setPaddings] = useState(["3rem", "4rem", "5rem"]);
  const [currentPadding, setCurrentPadding] = useState(paddings[1]);
  const [currentLanguage, setCurrentLanguage] = useState("typescript");
  const [languageIcon, setLanguageIcon] = useState("typescript.svg");
  const [background, setBackground] = useState(backgrounds[0].color);
  const [activeIcon, setActiveIcon] = useState(languages[0].icon);
  const [codeTheme, setCodeTheme] = useState("terminal");
  const [title, setTitle]  = useState("code2snap-export");

  const ref = useRef<HTMLDivElement>(null);

  const downloadScreenShot = useCallback((title: string) => {
    if (ref.current === null) {
      return;
    }

    // toPng(ref.current, { cacheBust: true, })
    //   .then((dataUrl) => {
    //     const link = document.createElement('a')
    //     link.download = 'my-image-name.png'
    //     link.href = dataUrl
    //     link.click()
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    html2canvas(ref.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = `${title}.png`;
      link.href = canvas.toDataURL();
      link.click();
    });
  }, [ref]);

 return (

  <>
    <div ref={ref}>
      <CodeEditor language={currentLanguage} theme={codeTheme} icon={activeIcon} currentPadding={currentPadding} background={background} setTitle={setTitle}/>
    </div>
    <div className="w-full">
    <header
      className="my-6 flex gap-6 w-[940px] py-5 px-6 z-10 bg-[#191919] rounded border border-[#3C3C3C] shadow-md items-center mx-auto"
    >
      <LanguageSelector language={currentLanguage} setCurrentLanguage={setCurrentLanguage} setLanguageIcon={setLanguageIcon}/>
      <PaddingSelector paddings={paddings} currentPadding={currentPadding} setPadding={setCurrentPadding} /> 
      <BackgroundSelector background={background} setBackground={setBackground} />
      <CodeThemeSelector codeTheme={codeTheme} setCodeTheme={setCodeTheme}/>
      <div className="export-btn self-center ml-auto">
        <button
          className="flex items-center gap-3 py-2 px-3 bg-blue-400 rounded-md text-sm text-blue-400 
          font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all 
          duration-300"
          onClick={() => downloadScreenShot(title)}
        >
          <Download />
          Export PNG
        </button>
      </div>
    </header>
    </div>
    <Footer />
  </>
)

}
