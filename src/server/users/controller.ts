import type { NextFunction, Response } from "express";

import type { AppRequest } from "../types";
import signUpPayloadSchema from "../../shared/users/payloads/sign-up";
import validatePayload from "../common/validation/validate-payload";

class UsersController {
  constructor() {}

  login = (_request: AppRequest, response: Response) => {
    response.status(204).send();
  };

  signup = (request: AppRequest, response: Response, next: NextFunction) => {
    const payload = validatePayload({
      schema: signUpPayloadSchema,
      request,
      response,
      next,
    });
    if (!payload) return;

    console.log("payload", payload);

    response.status(204).send();
  };
}

export default UsersController;
