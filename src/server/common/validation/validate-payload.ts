import type { NextFunction, Response } from "express";
import type { z } from "zod";

import type { AppRequest } from "../../types";

function validatePayload<Schema extends z.AnyZodObject>({
  schema,
  request,
  response,
  next,
}: {
  schema: Schema;
  request: AppRequest;
  response: Response;
  next: NextFunction;
}): false | z.infer<Schema> {
  let payload: z.infer<Schema>;
  try {
    payload = schema.parse(request.body);
  } catch (error) {
    console.error("error while validating payload for sign up;", error);
    response.status(400);
    next("router");
    return false;
  }

  return payload;
}

export default validatePayload;
