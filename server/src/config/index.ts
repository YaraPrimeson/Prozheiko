import * as process from "process";

require("dotenv").config();

export default {
  port: Number(process.env.PORT) || 5000,
  dbConnectLink:
    process.env.DBCONNECTLINK || "mongodb://localhost:27017/prozheiko",
  secretKey: process.env.SECRETKEY || "",
};
