import express, { Request, Response } from "express"
import db from "./src/config/db";
import cors from "cors"
const app = express()
const port = 3000

app.use(cors());

app.get('/', (req: Request, res: Response) =>
    res.send('Hello World!')
)


db().then(() => console.log("Conexion lista"))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))