import type { Context } from "hono";

export function dummy(c: Context) {
  return c.text("This is a dummy endpoint");
}