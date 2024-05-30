import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  endpoints: (builder) => ({
    getWildfires: builder.query({
      query: ({ date, hour }) => `wildfire/${date}/${hour}`,
    }),
  }),
});

export const { useGetWildfiresQuery } = apiSlice;
