import express from "express"
import router from "./routes";

const app = express();

const PORT = 3001

app.use(express.json())

app.use("/",router)

app.listen(PORT, () => {
    console.log(`HTTP backend running successfully on PORT ${PORT}`)
})