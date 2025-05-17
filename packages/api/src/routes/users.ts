import { Hono, type Context } from "hono";

import { dummy } from "../handlers/dummy";


const usersRoute = new Hono()

usersRoute.get("/", dummy)

export default usersRoute

