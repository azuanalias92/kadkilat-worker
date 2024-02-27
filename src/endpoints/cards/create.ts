import {
	OpenAPIRoute,
	OpenAPIRouteSchema,
} from "@cloudflare/itty-router-openapi";
import { Card } from "../../types";

export class CardCreate extends OpenAPIRoute {
	static schema: OpenAPIRouteSchema = {
		tags: ["Cards"],
		summary: "Create a new Card",
		requestBody: Card,
		responses: {
			"200": {
				description: "Returns the created card",
				schema: {
					success: Boolean,
					result: {
						card: Card,
					},
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
		// Retrieve the validated request body
		const cardToCreate = data.body;

		// Implement your own object insertion here

		// return the new card
		return {
			success: true,
			card: {
				id: cardToCreate.id,
				name: cardToCreate.name,
				category: cardToCreate.category,
				url: cardToCreate.url,
			},
		};
	}
}
