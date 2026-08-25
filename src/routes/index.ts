import { Router } from "express";
import { Express, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("home");
});

export default router;
