import { Hono } from "hono"
import indexRoute from "./src/routes"
import usersRoute from "./src/routes/users"

const app = new Hono()
const apiRouter = new Hono()

apiRouter.route("/", indexRoute)
apiRouter.route("/users", usersRoute)

app.route("/api", apiRouter)

export default app