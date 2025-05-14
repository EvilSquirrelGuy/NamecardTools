import { Hono } from "hono"

const app = new Hono()

app.get("/api/ping", (c) => c.text("Pong!"))
app.get("/api", (c) => c.json({ msg: "NamecardTools API is working!" }))

export default app