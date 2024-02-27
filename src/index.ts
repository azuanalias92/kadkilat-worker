import { OpenAPIRouter } from "@cloudflare/itty-router-openapi";
import { TaskCreate } from "./endpoints/taskCreate";
import { TaskDelete } from "./endpoints/taskDelete";
import { TaskFetch } from "./endpoints/taskFetch";
import { TaskList } from "./endpoints/taskList";
import { CardList } from "./endpoints/cards/list";
import { CardCreate } from "./endpoints/cards/create";
import { CardFetch } from "endpoints/cards/fetch";
import { CardDelete } from "endpoints/cards/delete";


export const router = OpenAPIRouter({
	docs_url: "/",
});

// router.get("/api/tasks/", TaskList);
// router.post("/api/tasks/", TaskCreate);
// router.get("/api/tasks/:taskSlug/", TaskFetch);
// router.delete("/api/tasks/:taskSlug/", TaskDelete);


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
	fetch: router.handle,
};
