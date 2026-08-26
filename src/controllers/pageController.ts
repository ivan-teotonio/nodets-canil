import { Request, Response } from "express";

import { createMenuObject } from "../helpers/createMenuObject";

export const home = (req: Request, res: Response) => {
  res.render("pages/page", {
    menu: createMenuObject("all"),
    banner: {
      title: "Todos os animais",
      background: "images/allanimals.jpg",
    },
  });
};

export const dogs = (req: Request, res: Response) => {
  res.render("pages/page", {
    menu: createMenuObject("dog"),
    banner: {
      title: "Cachorros",
      background: "images/banner_dog.jpg",
    },
  });
};

export const cats = (req: Request, res: Response) => {
  res.render("pages/page", {
    menu: createMenuObject("cat"),
    banner: {
      title: "Gatos",
      background: "images/banner_cat.jpg",
    },
  });
};

export const fishes = (req: Request, res: Response) => {
  res.render("pages/page", {
    menu: createMenuObject("fish"),
    banner: {
      title: "Peixes",
      background: "images/banner_fish.jpg",
    },
  });
};
