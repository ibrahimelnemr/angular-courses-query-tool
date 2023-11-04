import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import client from "./database";
import dotenv from "dotenv";
import competency_routes from "./handlers/competency";

dotenv.config();

export const app: express.Application = express();
const PORT: string = "3000";

const corsOptions = {
  origin: 'http://localhost:4200'
}

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.get("/", (req: express.Request, res: express.Response) =>
{
  res.send("Hello World!");
});

app.get("/testdb", async (req: express.Request, res: express.Response) =>
{
  try
  {
    const conn = await client.connect();
    const sql = "SELECT * from arch;";
    const result = await conn.query(sql);
    const rows = result.rows;
    conn.release();
    res.send(`Client Connected Successfully! ${ rows }`);
    console.log(rows[0]);
  } catch (error)
  {
    console.error("Error connecting to the database:", error);
  }
});

competency_routes(app);

app.listen(3000, function ()
{
  console.log(`starting app on port: ${ PORT }`);
});
