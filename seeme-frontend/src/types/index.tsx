import { To } from "react-router-dom";

export interface user {
  id: number;
  name: string;
  image: string;
}

export interface categories {
  name: string;
  image: string;
}

export interface pins {
  title: string;
  about: string;
  destination: To;
  category: string;
  image: string;
  postedBy: user;
  save: user;
  comments: string;
}
