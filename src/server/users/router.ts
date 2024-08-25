import { Router } from "express";

import type { AppRouter } from "../types";
import type Database from "../database";
import UsersController from "./controller";

class UsersRouter implements AppRouter {
  path = "/users";
  router = Router();
  private controller: UsersController;

  constructor({ database }: { database: Database }) {
    this.controller = new UsersController({ database });
    this.initializeRoutes();
  }

  private initializeRoutes = () => {
    this.router.post("/login", this.controller.login);
    this.router.post("/signup", this.controller.signup);
  };
}

export default UsersRouter;
