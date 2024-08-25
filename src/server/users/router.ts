import { Router } from "express";

import type { AppRouter } from "../types";
import type Database from "../database";
import UsersController from "./controller";

class UsersRouter implements AppRouter {
  path = "/users";
  router = Router();
  database: Database;
  private controller = new UsersController();

  constructor({ database }: { database: Database }) {
    this.database = database;
    this.initializeRoutes();
  }

  private initializeRoutes = () => {
    this.router.post("/login", this.controller.login);
    this.router.post("/signup", this.controller.signup);
  };
}

export default UsersRouter;
