import config from "./config";
import mongoose from "mongoose";
import express from "express";
import next from "next";
import cors from "cors";
import path from "path";
import router from "./routes";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const main = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(config.dbConnectLink);
    const server = express();

    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    server.use(
      cors({
        origin: true,
        credentials: true,
      })
    );
    // server.use(cookieParser());
    server.use("/api", router);
    server.use(
      express.static(path.resolve(__dirname, "../../client", ".next"))
    );
    server.use(express.static(".next"));
    server.all("*", (req: any, res: any) => {
      return handle(req, res);
    });

    server.listen(config.port, () => {
      console.log(`listening on *: ${config.port}`);
    });
  } catch (e) {
    console.log("Error on launch", e);
  }
};

main().then(() => {});
