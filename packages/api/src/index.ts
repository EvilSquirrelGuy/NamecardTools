import { Hono } from "hono"
import indexRoute from "./routes"
import usersRoute from "./routes/users"

const app = new Hono()
const apiRouter = new Hono()

apiRouter.route("/", indexRoute)
apiRouter.route("/users", usersRoute)

app.route("/api", apiRouter)

export default app