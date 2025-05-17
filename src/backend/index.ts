import { Hono } from "hono";
import { indexRouter } from "@backend/routes";

const app = new Hono();

const apiRouter = new Hono();

apiRouter.route("/", indexRouter)

app.route("/api", apiRouter);

export default app;