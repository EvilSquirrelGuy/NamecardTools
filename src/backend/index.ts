import { Hono } from "hono";
import { indexRouter } from "@backend/routes";

const app = new Hono().basePath("/api");

app.route("/", indexRouter)

export default app;