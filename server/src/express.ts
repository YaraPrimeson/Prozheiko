import express from "express";
import cors from "cors";
import router from "./routes";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.static(path.resolve(__dirname, "../../client", "build")));

app.use("/api", router);

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../client", "build", "index.html"));
});

export default app;
