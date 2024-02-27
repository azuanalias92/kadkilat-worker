import {
	OpenAPIRoute,
	OpenAPIRouteSchema,
	Path,
} from "@cloudflare/itty-router-openapi";
import { Card } from "../../types";

export class CardFetch extends OpenAPIRoute {
	static schema: OpenAPIRouteSchema = {
		tags: ["Cards"],
		summary: "Get a single Card by slug",
		parameters: {
			cardSlug: Path(String, {
				description: "Card slug",
			}),
		},
		responses: {
			"200": {
				description: "Returns a single card if found",
				schema: {
					success: Boolean,
					result: {
						card: Card,
					},
				},
			},
			"404": {
				description: "Card not found",
				schema: {
					success: Boolean,
					error: String,
				},
			},
		},
	};

	async handle(
		request: Request,
		env: any,
		context: any,
		data: Record<string, any>
	) {
		// Retrieve the validated slug
		const { cardId } = data.params;

		// Implement your own object fetch here

		const exists = true;

		// @ts-ignore: check if the object exists
		if (exists === false) {
			return Response.json(
				{
					success: false,
					error: "Object not found",
				},
				{
					status: 404,
				}
			);
		}

		return {
			success: true,
			card: {
				id : cardId
			},
		};
	}
}
