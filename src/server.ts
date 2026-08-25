import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mianRoutes from "./routes/index";

dotenv.config();

class Server {
  private app: Express;

  constructor() {
    this.app = express();
    this.configureViews();
    this.configureStatic();
    this.configureRoutes();
  }

  private configureViews(): void {
    this.app.set("view engine", "mustache");

    this.app.set("views", path.join(__dirname, "views"));

    this.app.engine("mustache", mustache());
  }

  private configureStatic(): void {
    this.app.use(express.static(path.join(__dirname, "../public")));
  }

  private configureRoutes(): void {
    this.app.use(mianRoutes);

    this.app.use((req: Request, res: Response) => {
      res.send("404 - Not Found");
    });
  }

  public start(): void {
    const port = process.env.PORT;

    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}

const server = new Server();

server.start();
