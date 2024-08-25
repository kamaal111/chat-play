import express from "express";
import ViteExpress from "vite-express";

import settings from "./settings";

const app = express();

ViteExpress.listen(app, settings.SERVER_PORT, () =>
  console.log("Server is listening on port 3000..."),
);
