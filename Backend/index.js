import express from "express";
const app = express()
import { route } from "./routers/router.js";
import cors from "cors"

app.use(cors())
import dotenv from "dotenv"
import "./config/config.js"
app.use(express.json())
dotenv.config()
app.use("/features", route)

app.listen(3000, () => {
    console.log("Bu app 3001 portunda dinlenilir")
})