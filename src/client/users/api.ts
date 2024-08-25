import { createApi } from "@reduxjs/toolkit/query/react";

import baseQuery from "../common/api/base-query";
import type { SignUpPayload } from "../../shared/users/payloads/sign-up";

const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: baseQuery({ path: "/users" }),
  endpoints: (builder) => ({
    signUp: builder.mutation<{ details: string }, SignUpPayload>({
      query: (payload) => ({ url: "/signup", method: "POST", body: payload }),
    }),
  }),
});

export const { useSignUpMutation } = usersApi;

export default usersApi;
