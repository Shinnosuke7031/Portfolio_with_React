import { type } from "os"

export type SiteDetailProps = {
  skills: string[];
}

export type AboutmeProps = {
  items: {
    title: string;
    text: string;
  }[];
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
  content: PortfolioContent;
  onClickNext: () => void;
  onClickBack: ()=>void;
}