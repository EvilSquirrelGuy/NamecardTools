import { Hono } from "hono"

const indexRoute = new Hono()

indexRoute.get("/ping", (c) => c.text("Pong!"))
indexRoute.get("/", (c) => c.json({ msg: "NamecardTools API is working!" }))

export default indexRoute