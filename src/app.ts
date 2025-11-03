import express, { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import nunjucks from "nunjucks";

const app = express();
const PORT = process.env.PORT || 5500;

// middleware
app.use(cors());

nunjucks.configure("src/templates", {
  autoescape: true,
  express: app,
});

app.get("/", (req: Request, res: Response) => {
  (res.render("home.html"), { title: "Clean Blog" });
});

app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
});
