import type { NextFunction, Response } from "express";
import bcrypt from "bcrypt";

import type { AppRequest } from "../types";
import signUpPayloadSchema from "../../shared/users/payloads/sign-up";
import validatePayload from "../common/validation/validate-payload";
import type Database from "../database/database";

class UsersController {
  database: Database;

  constructor({ database }: { database: Database }) {
    this.database = database;
  }

  login = (_request: AppRequest, response: Response) => {
    response.status(204).send();
  };

  signup = async (
    request: AppRequest,
    response: Response,
    next: NextFunction,
  ) => {
    const payload = validatePayload({
      schema: signUpPayloadSchema,
      request,
      response,
      next,
    });
    if (!payload) return;

    const existingUser = await this.database.user.findFirst({
      where: { username: payload.username },
    });
    if (existingUser) {
      response.status(409);
      next("router");
      return;
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(payload.password, salt);
    const createdUser = await this.database.user.create({
      data: { ...payload, password: hashedPassword },
    });
    console.log("createdUser", createdUser);

    response.status(204).send();
  };
}

export default UsersController;
