import dotenv from "dotenv";

dotenv.config();

import App from "./app";
import { UsersRouter } from "./users";
import Database from "./database";

const database = new Database();
const users = new UsersRouter({ database });
const app = new App({ routers: [users] });

app.listen();
