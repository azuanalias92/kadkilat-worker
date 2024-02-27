import {
	OpenAPIRoute,
	OpenAPIRouteSchema,
	Path,
} from "@cloudflare/itty-router-openapi";
import { Card } from "../../types";

export class CardDelete extends OpenAPIRoute {
	static schema: OpenAPIRouteSchema = {
		tags: ["Cards"],
		summary: "Delete a Card",
		parameters: {
			cardSlug: Path(String, {
				description: "Card slug",
			}),
		},
		responses: {
			"200": {
				description: "Returns if the card was deleted successfully",
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
		// Retrieve the validated slug
		const { cardId } = data.params;

		// Implement your own object deletion here

		// Return the deleted card for confirmation
		return {
			result: {
				card: {
					id : cardId
				},
			},
			success: true,
		};
	}
}
