import { type } from "os"

export type SiteDetailProps = {
  skills: string[];
  imgs: {
    src: string;
    title: string;
  }[];
  settings: any;
}

export type AboutmeProps = {
  items: {
    title: string;
    text: string;
  }[];
  imgs: {
    src: string;
    title: string;
  }[];
  settings: any;
}

type PortfolioContent = {
  id: number;
  name: string;
  url: string;
  img1: string;
  img2: string;
  text: string;
}

export type PortfolioProps ={
  contents: PortfolioContent[];
  settings: any;
}
// type PortfolioContent = {
//   id: number;
//   name: string;
//   url: string;
//   img1: string;
//   img2: string;
//   text: string;
// }

// export type PortfolioProps ={
//   content: PortfolioContent;
//   onClickNext: () => void;
//   onClickBack: ()=>void;
// }