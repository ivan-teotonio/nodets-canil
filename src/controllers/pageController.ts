import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  res.render("pages/page", {
    banner: {
      title: "Todos os animais",
      background: "images/allanimals.jpg",
    },
  });
};

export const dogs = (req: Request, res: Response) => {
  res.render("pages/page", {
    banner: {
      title: "Cachorros",
      background: "images/dogs.jpg",
    },
  });
};

export const cats = (req: Request, res: Response) => {
  res.render("pages/page", {
    banner: {
      title: "Gatos",
      background: "images/cats.jpg",
    },
  });
};

export const fishes = (req: Request, res: Response) => {
  res.render("pages/page", {
    banner: {
      title: "Peixes",
      background: "images/fishes.jpg",
    },
  });
};
