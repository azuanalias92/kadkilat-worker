import { OpenAPIRoute, OpenAPIRouteSchema, Query } from "@cloudflare/itty-router-openapi";
import { Card } from "../../types";

export class CardList extends OpenAPIRoute {
  static schema: OpenAPIRouteSchema = {
    tags: ["Cards"],
    summary: "List Cards",
    // parameters: {
    //   page: Query(Number, {
    //     description: "Page number",
    //     default: 0,
    //   }),
    //   isCompleted: Query(Boolean, {
    //     description: "Filter by completed flag",
    //     required: false,
    //   }),
    // },
    responses: {
      "200": {
        description: "Returns a list of cards",
        schema: {
          success: Boolean,
          result: {
            cards: [Card],
          },
        },
      },
    },
  };

  async handle(request: Request, env: any, context: any, data: Record<string, any>) {
    // Retrieve the validated parameters
    //const {} = data.query;

    // Implement your own object list here
    const { results } = await env.DATABASE.prepare("SELECT * FROM cards LIMIT 2").all();


    return {
      success: true,
      results: results,
    };
  }
}
