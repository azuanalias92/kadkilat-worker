import { OpenAPIRouter } from "@cloudflare/itty-router-openapi";
import { CardList } from "./endpoints/cards/list";
import { CardCreate } from "./endpoints/cards/create";
import { CardFetch } from "endpoints/cards/fetch";
import { CardDelete } from "endpoints/cards/delete";
import { createCors } from "itty-router";

export const router = OpenAPIRouter({
  docs_url: "/",
});
const { preflight, corsify } = createCors();

// embed preflight upstream to handle all OPTIONS requests
router.all("*", preflight);

router.get("/api/cards/", CardList);
router.post("/api/cards/", CardCreate);
router.get("/api/cards/:cardId/", CardFetch);
router.delete("/api/cards/:cardId/", CardDelete);

// 404 for everything else
router.all("*", () =>
  Response.json(
    {
      success: false,
      error: "Route not found",
    },
    { status: 404 }
  )
);

export default {
  fetch: async (request, env, ctx) => {
    return router.handle(request, env, ctx).then(corsify);
  },
};
