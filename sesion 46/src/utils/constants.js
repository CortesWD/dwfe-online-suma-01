import ux from '../assets/ux.svg';
import frontend from "../assets/frontend.svg";
import backend from "../assets/backend.svg";
import ds from "../assets/datascience.svg";

export const URLS = {
  base: '/',
  courses: '/cursos',
  events: '/eventos',
};

export const CURSOS = [
  {
    id: "1",
    name: "UX/UI",
    pathName: "ux",
    image: ux,
  },
  {
    id: "2",
    name: "Data Science",
    pathName: "ds",
    image: ds,
  },
  {
    id: "3",
    name: "Desarrollo Back-end",
    pathName: "fsv",
    image: backend,
  },
  {
    id: "4",
    name: "Desarrollo Front-end",
    pathName: "fa",
    image: frontend,
  }
];
