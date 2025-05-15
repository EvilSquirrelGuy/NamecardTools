import type { Context } from "hono"

export function dummy(c: Context) {
  c.status(500);
  return c.json({ err: "Not Implemented" })
}