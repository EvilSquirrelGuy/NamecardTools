import { Hono } from "hono"
import indexRoute from "./_routes"
import usersRoute from "./_routes/users"

const app = new Hono()
const apiRouter = new Hono()

apiRouter.route("/", indexRoute)
apiRouter.route("/users", usersRoute)

app.route("/api", apiRouter)

export default app