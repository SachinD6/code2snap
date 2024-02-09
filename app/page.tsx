"use client";1
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import CodeEditor from '@/components/CodeEditor'
import PaddingSelector from '@/components/PaddingSelector'
import { useRef, useState, useCallback } from 'react';
import LanguageSelector from '@/components/LanguageSelector';
import BackgroundSelector from '@/components/BackgroundSelector';
import { backgrounds, downloadScreenShot, languages } from '@/lib/utils';
import { Download } from 'lucide-react';

// import { toPng } from 'html-to-image';
import html2canvas from 'html2canvas';

export default function Home() {
  const editorRef = useRef(null);
    const [paddings, setPaddings] = useState(["1rem", "2rem", "3rem", "4rem"]);
    const [currentPadding, setCurrentPadding] = useState(paddings[2]);
    const [currentLanguage, setCurrentLanguage] = useState("typescript");
    const [languageIcon,setLanguageIcon] = useState("typescript.svg");
    const [background, setBackground] = useState(backgrounds[0]);
    const [activeIcon, setActiveIcon] = useState(languages[0].icon);

     const ref = useRef<HTMLDivElement>(null)

  const downloadScreenShot = useCallback(() => {
    if (ref.current === null) {
      return
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
      const link = document.createElement('a')
      link.download = 'my-image-name.png'
      link.href = canvas.toDataURL()
      link.click()
    
    })
  }, [ref])

  return (
    <>
    {/* <div className="flex items-center justify-center w-full h-full bg-slate-950 gap-16"> */}
    <header
        className="items-center mt-6 flex gap-6 w-[940px] p-5 fixed top-0 left-1/2 translate-x-[-50%]
         z-10 bg-[#191919] rounded border border-[#3C3C3C] shadow-md"
      >
      <LanguageSelector language={currentLanguage} setCurrentLanguage={setCurrentLanguage} setLanguageIcon={setLanguageIcon}/>
       <PaddingSelector
          paddings={paddings}
          currentPadding={currentPadding}
          setPadding={setCurrentPadding}
        /> 
           <BackgroundSelector background={background} setBackground={setBackground} />
         <div className="export-btn self-center ml-auto">
          <button
            className="flex items-center gap-3 py-2 px-3 bg-blue-400 rounded-md text-sm text-blue-400 
            font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all 
            duration-300"
            onClick={downloadScreenShot}
          >
            <Download />
            Export PNG
          </button>
        </div>
    </header>
    <div ref ={ref}>
    <CodeEditor language={currentLanguage} theme="terminal" icon ={activeIcon} currentPadding={currentPadding} background={background}/>
    </div>
    </>
  )
}
