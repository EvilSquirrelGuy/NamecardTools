import { Hono } from "hono";
import { dummy } from "@backend/handlers/.dummy";
import type { Context } from "hono";

export const indexRouter = new Hono();

indexRouter.get("/ping", (c: Context) => c.text("Pong!"));
indexRouter.get("/", dummy);