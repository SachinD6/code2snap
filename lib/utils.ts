import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { toPng, toJpeg} from 'html-to-image';


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const initialCode = `function guessMyNumber() {
  const userGuess = prompt("Guess a number between 1 and 10:");
  const secretNumber = Math.ceil(Math.random() * 10);

  if (parseInt(userGuess) === secretNumber) {
    return "Wow, you must be a psychic!";
  } else {
    return \`Nope, the number was \${secretNumber}. Better luck next time!\`;
  }
}

console.log(guessMyNumber());`;

export const languages = [
  {
    value: "JavaScript",
    label: "JavaScript",
    icon: "icons/javascript.svg",
  },
  {
    value: "HTML",
    label: "HTML",
    icon: "icons/html.svg",
  },
  {
    value: "CSS",
    label: "CSS",
    icon: "icons/css.svg",
  },
  {
    value: "Python",
    label: "Python",
    icon: "icons/python.svg",
  },
  {
    value: "Java",
    label: "Java",
    icon: "icons/java.svg",
  },
  {
    value: "TypeScript",
    label: "TypeScript",
    icon: "icons/typescript.svg",
  },
];

export const backgrounds = [
  // { color: "transparent", name: "Transparent" },
  { color: "linear-gradient(354deg,#ff75b5,#ffb86c)", name: "Fairy Dust" },
  { color: "linear-gradient(140deg, rgb(255, 207, 115), rgb(255, 122, 47))", name: "Sunset Blaze" },
  { color: "linear-gradient(90deg,#93f9b9,#1d976c)", name: "Emerald Oasis" },
  { color: "linear-gradient(140deg, rgb(142, 199, 251), rgb(28, 85, 170))", name: "Azure Dream" },
  { color: "linear-gradient(337deg,#654ea3,#da98b4)", name: "Mystic Twilight" },
  { color: "#000", name: "Midnight Shadow" },
  { color: "#fff", name: "Snow White" },
  { color: "linear-gradient(270deg,#fc6767,#ec008c)", name: "Crimson Passion" },
  { color: "linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248))", name: "Whispering Lilac" },
  { color: "linear-gradient(270deg,#514a9d,#24c6dc)", name: "Sapphire Serenity" },
];


export const getExtension = (language: string) => {
  switch (language) {
    case "JavaScript":
      return ".js";
    case "HTML":
      return ".html";
    case "CSS":
      return ".css";
    case "Python":
      return ".py";
    case "Java":
      return ".java";
    case "TypeScript":
      return ".ts";
    default:
      return ".js";
  }
};

export function downloadScreenShot() {
  const element = document.getElementById('code-ss');
  if (element) {
    toJpeg(element, { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
      });
  }
}

export const codeThemes =[
  "github",
  "monokai",
  "terminal",
  "twilight"

];