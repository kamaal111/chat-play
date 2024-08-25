import {
  type BaseQueryApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import METHODS, { type Method } from "../http/methods";
import { z } from "zod";

export type APIError = { details: string };

type BaseQueryResult<T> =
  | { error: { status: number; data?: APIError }; data: undefined }
  | { data: T; error: undefined };

const envSchema = z.object({
  VITE_API_BASE_URL: z.string().url(),
});

function validateEnv() {
  try {
    return envSchema.parse(import.meta.env);
  } catch (error) {
    console.error("environment validation error", error);
    throw error;
  }
}

const env = validateEnv();

function baseQuery({ path }: { path: `/${string}` }) {
  let baseURL = env.VITE_API_BASE_URL;
  if (baseURL.endsWith("/")) {
    baseURL = baseURL.slice(0, -1);
  }
  const _baseQuery = fetchBaseQuery({
    baseUrl: `${baseURL}/api/v1${path}`,
  });

  return async <Result extends object, Body extends object>(
    args: { url?: string; method?: Method; body?: Body },
    api: BaseQueryApi,
  ): Promise<BaseQueryResult<Result>> => {
    let result: Awaited<ReturnType<typeof _baseQuery>>;
    try {
      result = await _baseQuery(
        {
          url: args.url ?? "",
          method: args.method ?? METHODS.GET,
          body: args.body ? JSON.stringify(args.body) : null,
          headers: {
            "Content-Type": "application/json",
          },
        },
        api,
        {},
      );
    } catch (error) {
      console.error("api error", error);
      return { error: { status: 500 }, data: undefined };
    }

    const { error, data } = result;
    if (error) {
      const status = typeof error.status === "number" ? error.status : 500;
      return {
        error: { status, data: error.data as APIError },
        data: undefined,
      };
    }

    return { data: data as Result, error: undefined };
  };
}

export default baseQuery;
