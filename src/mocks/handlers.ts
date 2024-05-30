import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/wildfire/:date/:hour", async ({ params }) => {
    try {
      const response = await fetch(`/api/${params.date}/T${params.hour}.json`);
      const data = await response.json();
      const items = data?.data?.getPublicWildfireByDate?.items;
      if (!items) {
        return HttpResponse.error();
      }
      return HttpResponse.json({
        items,
      });
    } catch (error) {
      return HttpResponse.error();
    }
  }),
];
