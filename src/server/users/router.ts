import { Router } from "express";

import type { AppRouter } from "../types";
import type Database from "../database";

class UsersRouter implements AppRouter {
  path = "/users";
  router = Router();
  database: Database;

  constructor({ database }: { database: Database }) {
    this.database = database;
  }
}

export default UsersRouter;
